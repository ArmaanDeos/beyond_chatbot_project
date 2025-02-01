import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const { scrollY } = useScroll();
  const [floating, setFloating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setFloating(latest > 50);
    });
  }, [scrollY]);

  return (
    <div className="flex items-center justify-center w-full">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-4  transform -translate-x-1/2 w-[90%] md:w-[80%] px-6 py-3 rounded-full 
        bg-black/80 backdrop-blur-lg shadow-xl flex items-center justify-between z-50 transition-all 
        ${floating ? "scale-105 shadow-2xl" : "scale-100"}`}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-blue-400 cursor-pointer"
        >
          BeyondChat
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {["Product", "Features", "Pricing", "Testimonials"].map((item) => (
            <motion.a
              key={item}
              whileHover={{ scale: 1.05, color: "#3b82f6" }}
              className="text-gray-300 hover:text-blue-400 cursor-pointer transition-all"
            >
              {item}
            </motion.a>
          ))}
          {/* Get Started Button (Visible on Large Screens) */}
          <Link to={"/auth/login"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all"
            >
              Get Started
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu />
        </button>
      </motion.header>

      {/* Mobile Menu (Full Width) */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center z-40"
        >
          {/* Close Menu */}
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>

          {["Product", "Features", "Pricing", "Testimonials"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-300 hover:text-blue-400 text-2xl py-4 transition-all"
            >
              {item}
            </a>
          ))}

          {/* Get Started Button in Mobile Menu */}
          <Link to={"/auth/login"} className="mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-500 text-white px-8 py-3 rounded-full text-xl shadow-md hover:bg-blue-600 transition-all"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
