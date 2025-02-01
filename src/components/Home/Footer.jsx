import { motion } from "framer-motion";
import { FiTwitter, FiLinkedin, FiGithub, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative bg-black/80 backdrop-blur-lg text-white py-12 mt-20 rounded-t-3xl shadow-2xl">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-blue-400">BeyondChat</h3>
          <p className="text-gray-400 mt-2">
            Making conversations smarter since 2020.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-400">Product</h4>
          <ul className="space-y-2 text-gray-300">
            {["Features", "Pricing", "Documentation", "Guides"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05, color: "#3b82f6" }}
                className="cursor-pointer transition-all"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-400">Company</h4>
          <ul className="space-y-2 text-gray-300">
            {["About", "Blog", "Careers", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05, color: "#3b82f6" }}
                className="cursor-pointer transition-all"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-400">Connect</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            {[
              { icon: <FiTwitter />, link: "#" },
              { icon: <FiLinkedin />, link: "#" },
              { icon: <FiGithub />, link: "#" },
              { icon: <FiFacebook />, link: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all shadow-md hover:bg-blue-500"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} Build by Armaan Ahmad. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
