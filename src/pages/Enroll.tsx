import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Enroll = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const course = courses.find((c) => c.id === id);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    await emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      "template_x2aeeoy",
      formRef.current,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    );

    setLoading(false);

    navigate("/success", {
      state: { course: course?.title },
    });
  };

  if (!course) {
    return (
      <div className="pt-32 text-center text-white">
        Course not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-6 md:px-12 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-[#39FF14]/10 blur-[200px] rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-[#00ffcc]/10 blur-[200px] rounded-full bottom-[-200px] right-[-200px]" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT PANEL – COURSE SUMMARY */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="text-[#39FF14] uppercase tracking-widest text-sm">
            Enrollment
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Join <span className="text-[#39FF14]">{course.title}</span>
          </h1>

          <p className="text-gray-400 text-lg">
            You’re about to secure your seat. Fill your details and our team will contact you to complete onboarding.
          </p>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 space-y-3">
            <p className="text-sm text-gray-400">Program Includes:</p>
            <p>✔ Live interactive sessions</p>
            <p>✔ Practical assignments</p>
            <p>✔ Community support</p>
            <p>✔ Certification</p>
          </div>
        </motion.div>

        {/* RIGHT PANEL – PREMIUM FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/5 backdrop-blur-2xl border border-[#39FF14]/20 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          {/* Animated Border */}
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-3xl border border-[#39FF14]/30 pointer-events-none"
          />

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="text-sm text-gray-400">Full Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#39FF14] focus:ring-2 focus:ring-[#39FF14]/30 outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Email Address</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#39FF14] focus:ring-2 focus:ring-[#39FF14]/30 outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Phone Number</label>
              <input
                type="tel"
                name="user_phone"
                required
                className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#39FF14] focus:ring-2 focus:ring-[#39FF14]/30 outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Selected Course</label>
              <input
                type="text"
                name="course_name"
                value={course.title}
                readOnly
                className="w-full mt-2 px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-gray-400"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="w-full py-3 mt-4 bg-[#39FF14] text-black font-semibold rounded-xl shadow-lg transition"
            >
              {loading ? "Processing..." : "Secure My Seat"}
            </motion.button>

          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Enroll;