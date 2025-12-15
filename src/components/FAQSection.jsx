import { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [heights, setHeights] = useState([]);
  const contentRefs = useRef([]);

  const faqs = [
    {
      question: "How does FreelanceCDI work?",
      answer:
        "Freelancers and companies connect directly for long-term or remote contracts. The platform charges no commission — only a simple subscription model.",
    },
    {
      question: "Do you offer short-term gigs?",
      answer:
        "No. FreelanceCDI focuses on weekly, monthly, and multi-month projects to create stable, professional collaborations.",
    },
    {
      question: "How do payments work?",
      answer:
        "Payments occur directly between freelancers and clients (e.g., bank transfer, external methods). FreelanceCDI does not take a cut.",
    },
    {
      question: "Is FreelanceCDI available worldwide?",
      answer:
        "Yes. Freelancers and companies from any country can register and collaborate.",
    },
    {
      question: "What types of skills are accepted?",
      answer:
        "Accounting, development, marketing, design, customer service, video editing, translation, and more.",
    },
  ];

  useEffect(() => {
    // Store the scrollHeight of each content div
    const newHeights = contentRefs.current.map((ref) => ref?.scrollHeight || 0);
    setHeights(newHeights);
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="container mx-auto scroll-mt-28 px-3 md:px-4">
      <div className="flex items-center justify-start md:mb-4 mb-0">
        <h2 className="md:text-4xl text-2xl font-bold text-gray-900 md:mb-4 mb-2">
          FAQ
        </h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl bg-gray-100 text-slate-900 transition-all duration-100"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-5 py-5 flex items-center justify-between text-left"
            >
              <span className="text-lg sm:text-xl font-medium pr-4">
                {faq.question}
              </span>
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <Minus className="w-6 h-6 transition-transform duration-100" />
                ) : (
                  <Plus className="w-6 h-6 transition-transform duration-100" />
                )}
              </div>
            </button>

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight: openIndex === index ? heights[index] + "px" : "0px",
                opacity: openIndex === index ? 1 : 0,
                transition: "max-height 0.5s ease, opacity 0.5s ease",
                overflow: "hidden",
              }}
            >
              <div className="px-6 pb-6 sm:px-8 sm:pb-7">
                <p className="text-slate-900 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
