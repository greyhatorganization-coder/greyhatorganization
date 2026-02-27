import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  const scale = useTransform(smoothProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(smoothProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">

      {/* ================= CINEMATIC INTRO ================= */}
      <div className="h-screen sticky top-0 flex items-center justify-center px-6 md:px-10">

        {/* Moving Glow */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] md:w-[900px] h-[500px] md:h-[900px] bg-[#39FF14]/10 blur-3xl rounded-full"
        />

        {/* Sweep Line */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute top-1/2 w-full h-[2px] bg-[#39FF14] opacity-30"
        />

        <motion.div
          style={{ scale, opacity }}
          className="text-center z-10"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[9vw] font-black tracking-tight text-white"
            >
              GREYHAT
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[9vw] font-black tracking-tight text-[#39FF14] drop-shadow-[0_0_20px_#39FF14]"
            >
              ORGANIZATION
            </motion.h1>
          </div>
        </motion.div>
      </div>

      {/* ================= TRANSITION ================= */}
      <div className="h-32 md:h-40 bg-gradient-to-b from-black to-[#0a0f0f]" />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative bg-[#0a0f0f] py-20 md:py-32 px-6 md:px-10 lg:px-20">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >

          {/* LEFT SIDE */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Build Elite <span className="text-[#39FF14]">Digital Skills</span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg mb-8 md:mb-10 max-w-xl mx-auto md:mx-0">
              GreyHat Organization is a futuristic skill ecosystem focused on
              practical cybersecurity, advanced tech education, and real-world mastery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <Link
              to="/courses"
              className="inline-block px-8 py-4 bg-[#39FF14] text-black rounded-xl font-semibold hover:scale-105 transition"
            >
              Explore Courses
            </Link>

              <Link
                to="/about"
                className="inline-block px-8 py-4 border border-white/20 rounded-xl hover:border-[#39FF14] hover:text-[#39FF14] transition"
              >
                About Us
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE FEATURE CARD */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 80, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8 },
              },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl"
          >

            {/* Glow Pulse Border */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl border border-[#39FF14]/30 pointer-events-none"
            />

            <h3 className="text-xl sm:text-2xl font-semibold text-[#39FF14] mb-4">
              Featured Program
            </h3>

            <h4 className="text-lg sm:text-xl font-bold mb-2">
              Ghost 1.0 – Advanced Cybersecurity
            </h4>

            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Master real-world cybersecurity skills with hands-on projects.
            </p>

            <div className="text-2xl sm:text-3xl font-bold mb-2">
              ₹1299
              <span className="text-gray-500 line-through text-base sm:text-lg ml-3">
                ₹3999
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Limited to first 30 students
            </p>

            <button className="w-full py-3 bg-[#39FF14] text-black rounded-xl font-semibold hover:scale-105 transition duration-300">
              Enroll Now
            </button>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;