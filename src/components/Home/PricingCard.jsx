import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const PricingCard = ({ title, price, features, recommended }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-800/50 hover:border-cyan-500/30 transition-all group relative overflow-hidden"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="text-4xl font-bold">
          ${price}
          <span className="text-lg">/mo</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <FiCheck className="w-5 h-5" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 rounded-lg ${
          recommended ? "bg-white text-blue-600" : "bg-blue-600 text-white"
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
};
export default PricingCard;
