import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO INTRO ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">

        {/* Background Glow */}
        <div className="absolute w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-[#39FF14]/10 blur-3xl rounded-full" />

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-black tracking-tight"
        >
          About <span className="text-[#39FF14]">GreyHat</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-6 max-w-2xl text-gray-400 text-base md:text-lg"
        >
          We are building a futuristic digital skill ecosystem focused on
          real-world cybersecurity and advanced technology mastery.
        </motion.p>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-24 px-6 md:px-16 bg-[#0a0f0f]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-gray-400 leading-relaxed">
              GreyHat Organization is not just an education platform.
              It is a skill-building movement designed for learners who
              want practical knowledge, not theoretical noise.
              We focus on limited batches, mentorship, and hands-on learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10"
          >
            <h3 className="text-2xl font-semibold text-[#39FF14] mb-4">
              Our Philosophy
            </h3>

            <p className="text-gray-400">
              Learn. Apply. Master.
              <br />
              No shortcuts. No fake hype.
              Just real-world digital excellence.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {[
            {
              title: "Our Mission",
              text: "To build elite digital professionals through practical cybersecurity and advanced tech education.",
            },
            {
              title: "Our Vision",
              text: "To redefine modern learning by creating a futuristic, skill-driven ecosystem.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl"
            >
              <h3 className="text-3xl font-bold mb-4 text-[#39FF14]">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.text}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-32 px-6 md:px-16 bg-[#0a0f0f] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Core <span className="text-[#39FF14]">Values</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["Integrity", "Practical Mastery", "Focused Mentorship"].map(
            (value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300"
              >
                <p className="text-lg text-gray-300">{value}</p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Level Up?
        </h2>

        <button className="px-8 py-4 bg-[#39FF14] text-black font-semibold rounded-xl hover:scale-105 transition duration-300">
          Explore Courses
        </button>
      </section>

    </div>
  );
};

export default About;