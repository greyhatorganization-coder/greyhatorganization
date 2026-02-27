import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass =
    "hover:text-[#39FF14] transition duration-200";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-[#39FF14]"
          >
            GreyHat
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 text-gray-300">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navClass}>
              About
            </NavLink>

            <NavLink to="/courses" className={navClass}>
              Courses
            </NavLink>

            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-10 text-2xl text-white">
          <NavLink to="/" onClick={() => setOpen(false)} className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)} className={navClass}>
            About
          </NavLink>

          <NavLink to="/courses" onClick={() => setOpen(false)} className={navClass}>
            Courses
          </NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)} className={navClass}>
            Contact
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;