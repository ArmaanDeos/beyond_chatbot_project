import ClientLogo from "@/components/Home/Client";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import PricingCard from "@/components/Home/PricingCard";
import TestimonialCard from "@/components/Home/Testimonial";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const HomePage = () => {
  const features = [
    { title: "Neural Conversations", desc: "24/7 deep learning interactions" },
    { title: "Omni-Channel AI", desc: "Seamless cross-platform integration" },
    { title: "Cognitive Analytics", desc: "Real-time neural insights" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO @NeuroTech",
      text: "Redefined our digital ecosystem with AI mastery",
    },
    {
      name: "Mike Chen",
      role: "CTO @QuantumLeap",
      text: "The neural architecture is groundbreaking",
    },
    {
      name: "Emma Wilson",
      role: "CMO @FutureX",
      text: "300% ROI boost through cognitive automation",
    },
  ];

  const clients = ["NVIDIA", "OpenAI", "Tesla", "DeepMind", "SpaceX"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-space-950 to-slate-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-white">
              BeyondChat – Where Conversations Evolve
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              BeyondChat – Smart, Seamless, and Engaging Conversations for the
              Future.
            </p>
            <Link to={"/auth/login"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all"
              >
                Initiate Neural Sync
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-24 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl rounded-full" />
            {/* <img
              src="../../../public/assets/hologram.jpg"
              alt="AI Interface"
              className="relative z-10 mx-auto w-full max-w-6xl rounded-3xl border border-gray-800/50 shadow-2xl"
            /> */}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative  ">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
          >
            Quantum-Core Features
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-800/50 hover:border-cyan-500/30 transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <FiCheck className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
          >
            Neuro-Synaptic Pricing
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter Core"
              price="499"
              features={[
                "Basic Neural Net",
                "50K API calls",
                "Community Support",
              ]}
              gradient="bg-gradient-to-br from-gray-800 to-gray-900"
            />
            <PricingCard
              title="Quantum Pro"
              price="999"
              features={[
                "Advanced ML Models",
                "500K API calls",
                "Priority Sync",
              ]}
              gradient="from-cyan-600/20 to-blue-700/20"
              border="border-cyan-500/30"
              featured
            />
            <PricingCard
              title="Enterprise AI"
              price="1999"
              features={[
                "Custom Neural Architectures",
                "Unlimited API",
                "24/7 Quantum Support",
              ]}
              gradient="from-gray-800 to-gray-900"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
          >
            Cognitive Endorsements
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                text={testimonial.text}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
          >
            Pioneering Partners
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-12">
            {clients.map((client, index) => (
              <ClientLogo
                key={index}
                name={client}
                delay={index * 0.1}
                className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
