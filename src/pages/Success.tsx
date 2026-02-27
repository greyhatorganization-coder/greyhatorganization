import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const courseName = location.state?.course || "Your Course";

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6">

      <div className="max-w-4xl mx-auto text-center">

        {/* ===== TOP SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="w-20 h-20 mx-auto rounded-full border-2 border-[#39FF14] flex items-center justify-center text-[#39FF14] text-3xl font-bold">
            ✓
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Enrollment Confirmed
          </h1>

          <p className="text-[#39FF14] text-xl font-semibold">
            {courseName}
          </p>

          <p className="text-gray-400 max-w-xl mx-auto">
            Our team will contact you shortly with onboarding details.
          </p>
        </motion.div>

        {/* ===== COMMUNITY SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-2xl mx-auto mt-16 border border-white/10 rounded-2xl p-10 bg-white/[0.04] space-y-6"
        >
          <h2 className="text-2xl font-semibold">
            Join The Community
          </h2>

          <p className="text-gray-400">
            All live class links and announcements will be shared inside our
            official WhatsApp group.
          </p>

          <a
            href="https://chat.whatsapp.com/BL2BukF0wBl813Ne1fBmRs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#39FF14] text-black font-semibold rounded-xl hover:scale-105 transition"
          >
            Join WhatsApp Group
          </a>
        </motion.div>

        {/* ===== NAVIGATION ===== */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
          <Link
            to="/"
            className="px-6 py-2 border border-white/20 rounded-lg hover:border-[#39FF14] hover:text-[#39FF14] transition"
          >
            Back to Home
          </Link>

          <Link
            to="/courses"
            className="px-6 py-2 border border-white/20 rounded-lg hover:border-[#39FF14] hover:text-[#39FF14] transition"
          >
            Explore More Courses
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Success;