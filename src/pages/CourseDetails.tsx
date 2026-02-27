import { Link, useParams } from "react-router-dom";
import { courses } from "../data/courses";
import { motion } from "framer-motion";

const CourseDetail = () => {
  const { id } = useParams();

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="text-white pt-32 text-center">
        Course not found.
      </div>
    );
  }

  return (
    <div className="bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-20">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {course.title}
        </h1>

        <p className="text-gray-400 text-lg mb-10">
          {course.description}
        </p>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-[#39FF14] mb-4">
            Course Details
          </h2>

          <p className="text-gray-300 mb-6">
            {course.details}
          </p>

          <div className="text-3xl font-bold mb-6">
            {course.price}
            {course.oldPrice && (
              <span className="text-gray-500 line-through text-lg ml-4">
                {course.oldPrice}
              </span>
            )}
          </div>

             <Link
              to={`/enroll/${course.id}`}
              className="px-8 py-4 bg-[#39FF14] text-black rounded-xl font-semibold hover:scale-105 transition"
            >
              Enroll Now
            </Link>
        </div>

      </motion.div>
    </div>
  );
};

export default CourseDetail;