import React, { useState } from 'react'

const Faqs = () => {
  const faqs = [
    {
      question: " What is a business consultant?",
      answer:
        "Enim ad minim veniam, quis nostrud exercitat ullrem ipsum dolor sit amet, consece adipising elit, o eiusmod tempor incididunt ut labore bit of how ther chancer flat bogeo viele marioa.",
    },
    {
      question: "I need a business consulting service?",
      answer:
        "Enim ad minim veniam, quis nostrud exercitat ullrem ipsum dolor sit amet, consece adipising elit, o eiusmod tempor incididunt ut labore bit of how ther chancer flat bogeo viele marioa.",
    },
    {
      question: "Donate Or Fundraise",
      answer:
        "Enim ad minim veniam, quis nostrud exercitat ullrem ipsum dolor sit amet, consece adipising elit, o eiusmod tempor incididunt ut labore bit of how ther chancer flat bogeo viele marioa.",
    },
    {
      question: "How Do You Price Your Services?",
      answer:
        "Enim ad minim veniam, quis nostrud exercitat ullrem ipsum dolor sit amet, consece adipising elit, o eiusmod tempor incididunt ut labore bit of how ther chancer flat bogeo viele marioa.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-lg text-red-500 font-bold text-center mb-6 capitalize">Frequently Asked Questions</p>
        <h2 className="text-6xl font-bold text-center mb-10">Business Faq’s</h2>

        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border ${openIndex === index ? "border-orange-500 rounded-2xl transition duration-300" : "border-gray-400 rounded-full rounded-br-none"} transition duration-300 p-4 shadow-sm`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center gap-2 text-left text-lg font-medium text-gray-800 w-full"
              >
                <span className={`${openIndex === index ? "py-2 px-5 bg-[#de7148] transition duration-400" : "py-2 px-4 bg-slate-400"} text-white font-bold text-2xl rounded-full rounded-br-none`}>
                  {openIndex === index ? "-" : "+"}
                </span>
                <span className=''>{faq.question}</span>
              </button>
              {openIndex === index && (
                <p className="mt-3 ml-8 text-gray-600 ">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Faqs
