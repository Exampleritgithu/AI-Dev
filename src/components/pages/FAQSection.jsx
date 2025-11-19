import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does an AI text generator work?",
      answer:
        "We contribute to the implementation of a project from step 0: we can already help our partners by giving them advice & suggestions when they contact us.",
    },
    {
      question:
        "What is the typical timeline and cost for developing a Blockchain solution?",
      answer:
        "The cost and duration depend on the complexity of the project, but typically range from a few weeks to several months.",
    },
    {
      question:
        "What is the difference between public and private Blockchains?",
      answer:
        "Public blockchains are open to everyone, while private blockchains are restricted to specific participants.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#030026] text-white">

      {/* Hero Section */}
      <section
        className="h-[80vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/Blog-3.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#030026]/60 to-[#0b0033]/90"></div>

        <div className="relative text-center">
          <div className="flex justify-center space-x-2 text-gray-300 text-sm mb-2">
            <a href="#" className="hover:text-purple-400">Home</a>
            <span>/</span>
            <span>FAQSection</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Service Details
          </h1>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="min-h-screen bg-[#080016] flex flex-col items-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gray-400">Frequently</span> Asked Questions
        </h2>

        <div className="w-full max-w-4xl space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0d0024] rounded-xl shadow-md border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 text-lg font-semibold hover:bg-[#150038] transition-all"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="text-gray-400" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>

              {openIndex === index && (
                <div className="bg-gradient-to-r from-purple-800/30 to-indigo-900/30 text-gray-300 px-6 py-5 border-t border-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FAQSection;
