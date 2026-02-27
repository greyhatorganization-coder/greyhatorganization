import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="relative bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#39FF14]/10 blur-3xl rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-[#00ffcc]/10 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Let’s Build Something <br />
            <span className="text-[#39FF14]">Powerful Together</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            Have questions about Ghost 1.0 or our programs?
            Reach out and we’ll personally guide you.
          </p>

          <div className="mt-10 space-y-4 text-gray-300">
            <p>📧 greyhatorganization@gmail.com</p>
            <p>📍 India</p>
            <p>🚀 Elite Cyber Learning Platform</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl space-y-6"
        >

          {/* Neon Border Pulse */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-3xl border border-[#39FF14]/30 pointer-events-none"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-[#39FF14] focus:ring-2 focus:ring-[#39FF14]/30 transition"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-[#39FF14] focus:ring-2 focus:ring-[#39FF14]/30 transition"
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-[#39FF14] focus:ring-2 focus:ring-[#39FF14]/30 transition resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#39FF14] text-black rounded-xl font-semibold hover:scale-105 transition duration-300 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-center mt-2">
              ✅ Message sent successfully!
            </p>
          )}

        </motion.form>

      </div>
    </div>
  );
};

export default Contact;