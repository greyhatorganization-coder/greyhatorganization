import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-20 pb-10 px-6 md:px-12 lg:px-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#39FF14]/10 blur-3xl rounded-full bottom-[-250px] left-[-200px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-[#39FF14] mb-4">
              GreyHat
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              A futuristic digital skill ecosystem focused on
              cybersecurity and real-world mastery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <Link to="/" className="hover:text-[#39FF14] transition">
                Home
              </Link>
              <br />
              <Link to="/about" className="hover:text-[#39FF14] transition">
                About
              </Link>
              <br />
              <Link to="/courses" className="hover:text-[#39FF14] transition">
                Courses
              </Link>
              <br />
              <Link to="/contact" className="hover:text-[#39FF14] transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>Ghost 1.0</p>
              <p>Basic Computer Mastery</p>
              <p>Networking Fundamentals</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>greyhatorganization@gmail.com</p>
              <p>India</p>
              <p>Elite Cyber Learning</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} GreyHat Organization. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;