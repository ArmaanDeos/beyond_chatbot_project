import { motion } from "framer-motion";
const ClientLogo = ({ name, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="text-2xl font-bold text-gray-500 hover:text-blue-400 transition-colors"
    >
      {name}
    </motion.div>
  );
};

export default ClientLogo;
