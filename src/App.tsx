import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Atmosphere from "./components/Atmosphere";

import Hero from "./components/Hero";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CourseDetails from "./pages/CourseDetails";
import ScrollToTop from "./components/ScrollToTop";
import Enroll from "./pages/Enroll";
import Success from "./pages/Success";

function Home() {
  return <Hero />;
}

function App() {
  return (
    <BrowserRouter>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Background Layer */}
      <Atmosphere />

      {/* Navbar Always Visible */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/enroll/:id" element={<Enroll />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;