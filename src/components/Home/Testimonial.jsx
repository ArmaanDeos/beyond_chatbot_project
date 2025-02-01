import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const TestimonialCard = ({ name, role, text, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-800/50 hover:border-cyan-500/30 transition-all group relative overflow-hidden"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gray-100 rounded-full" />
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-gray-100">{name}</h4>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-400">{text}</p>
      <div className="flex gap-1 mt-4 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} />
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
