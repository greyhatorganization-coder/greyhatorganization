import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";

const Courses = () => {
  const featured = courses[0];
  const others = courses.slice(1);

  return (
    <div className="relative bg-black text-white pt-32 pb-28 px-6 md:px-12 lg:px-20 overflow-hidden">

      {/* Ambient Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-[#39FF14]/10 blur-3xl rounded-full top-[-200px] right-[-200px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* ================= FEATURED ================= */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32 grid md:grid-cols-2 gap-14 items-center"
        >
          <div>
            <p className="text-[#39FF14] uppercase tracking-widest text-sm mb-4">
              Featured Program
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {featured.title}
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              {featured.description}
            </p>

            <div className="text-3xl font-bold mb-6">
              {featured.price}
              <span className="text-gray-500 line-through text-lg ml-4">
                {featured.oldPrice}
              </span>
            </div>

            <Link
              to={`/courses/${featured.id}`}
              className="inline-block px-10 py-4 bg-[#39FF14] text-black font-semibold rounded-xl hover:scale-105 transition"
            >
              Explore Ghost 1.0
            </Link>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative bg-white/5 backdrop-blur-xl border border-[#39FF14]/30 rounded-3xl p-12 shadow-2xl"
          >
            <div className="absolute inset-0 rounded-3xl border border-[#39FF14]/20 animate-pulse pointer-events-none" />

            <h3 className="text-2xl font-semibold mb-4 text-[#39FF14]">
              What You’ll Master
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Ethical hacking, penetration testing, network security,
              real-world attack simulations, and hands-on projects.
            </p>
          </motion.div>
        </motion.div>

        {/* ================= OTHER COURSES ================= */}
        <div className="space-y-16">
          {others.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center border-b border-white/10 pb-14"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  {course.title}
                </h2>

                <p className="text-gray-400 mb-6">
                  {course.description}
                </p>

                <div className="text-2xl font-semibold mb-6">
                  {course.price}
                </div>

                <Link
                  to={`/courses/${course.id}`}
                  className="inline-block px-8 py-3 border border-[#39FF14] rounded-xl hover:bg-[#39FF14] hover:text-black transition"
                >
                  View Details
                </Link>
              </div>

             <motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 150 }}
  className="relative bg-white/5 backdrop-blur-2xl border border-[#39FF14]/30 rounded-3xl p-10 shadow-2xl"
>

  {/* Neon Pulse Border */}
  <motion.div
    animate={{ opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 3, repeat: Infinity }}
    className="absolute inset-0 rounded-3xl border border-[#39FF14]/20 pointer-events-none"
  />

  <h3 className="text-2xl font-semibold mb-6 text-[#39FF14]">
    What You'll Learn
  </h3>

  <p className="text-gray-300 leading-relaxed mb-8">
    {course.details}
  </p>

  <div className="flex justify-between text-sm text-gray-400">
    <span>Hands-on Projects</span>
    <span>Certification</span>
  </div>

</motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Courses;