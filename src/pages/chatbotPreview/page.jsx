import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChatbotPreview = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const newMessage = {
      text: inputMessage,
      isBot: false,
      id: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you for your message. This is an automated response while we work on the AI integration.",
          isBot: true,
          id: Date.now() + 1,
        },
      ]);
    }, 1000);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted: ${feedback}`);
    setFeedback("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Feedback Topbar */}
      <div className="fixed top-0 left-0 right-0 bg-indigo-600 text-white p-4 flex items-center justify-between">
        <span className="font-medium">Chatbot not working as intended?</span>
        <form onSubmit={handleFeedbackSubmit} className="flex gap-2">
          <input
            type="text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your feedback..."
            className="px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-black placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Main Content */}
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to TechCorp
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Innovating the future of digital experiences
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img
                src="https://picsum.photos/400/300?tech"
                alt="Technology"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Advanced Solutions</h3>
              <p className="text-gray-600">
                Cutting-edge technology for modern businesses
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img
                src="https://picsum.photos/401/300?meeting"
                alt="Consulting"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Expert Consulting</h3>
              <p className="text-gray-600">
                Professional guidance for your digital journey
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img
                src="https://picsum.photos/402/300?data"
                alt="Support"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock assistance for your needs
              </p>
            </div>
          </div>
        </section>

        {/* Chatbot Interface */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-24 right-6 w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden border text-black dark:text-white dark:bg-gray-800"
            >
              <div className="p-4 bg-indigo-600 text-white flex justify-between items-center">
                <h3 className="text-lg font-semibold">Virtual Assistant</h3>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-full"
                >
                  ×
                </button>
              </div>

              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isBot ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isBot
                          ? "bg-gray-100"
                          : "bg-indigo-600 text-white"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Trigger Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-xl flex items-center justify-center text-white transition-transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatbotPreview;
