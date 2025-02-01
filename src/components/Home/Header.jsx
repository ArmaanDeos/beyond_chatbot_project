import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { scrollY } = useScroll();
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setFloating(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        transform: floating ? "translateY(-10px)" : "translateY(0)",
        transition: "transform 0.3s ease-in-out",
      }}
      className="fixed  -translate-x-1/2 top-4 w-[90%] md:w-[100%] px-6 py-3 rounded-full bg-black/80 backdrop-blur-lg shadow-xl flex items-center justify-between z-50"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-bold text-blue-400"
      >
        BeyoundChat
      </motion.div>
      <div className="hidden md:flex space-x-6">
        {["Product", "Features", "Pricing", "Testimonials"].map((item) => (
          <motion.a
            key={item}
            whileHover={{ scale: 1.05, color: "#3b82f6" }}
            className="text-gray-300 hover:text-blue-400 cursor-pointer"
          >
            {item}
          </motion.a>
        ))}
      </div>
      <Link to={"/auth/login"}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 text-white px-6 py-2 rounded-full"
        >
          Get Started
        </motion.button>
      </Link>
    </motion.header>
  );
};

export default Header;
