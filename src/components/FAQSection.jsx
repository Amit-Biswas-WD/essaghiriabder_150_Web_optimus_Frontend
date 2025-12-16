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
    const newHeights = contentRefs.current.map((ref) => ref?.scrollHeight || 0);
    setHeights(newHeights);
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="container mx-auto scroll-mt-28 px-3 md:px-4">
      <h2 className="md:text-4xl text-2xl font-bold text-gray-900 mb-4">FAQ</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: isOpen ? "#161622" : "#F9F9FB",
              }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span
                  className="text-xl sm:text-2xl font-medium pr-4 transition-colors duration-300"
                  style={{
                    color: isOpen ? "#FFFFFF" : "#0F172A",
                  }}
                >
                  {faq.question}
                </span>

                {isOpen ? (
                  <Minus className="w-6 h-6 text-white" />
                ) : (
                  <Plus className="w-6 h-6 text-slate-900" />
                )}
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight: isOpen ? heights[index] + "px" : "0px",
                  opacity: isOpen ? 1 : 0,
                  transition: "max-height 0.5s ease, opacity 0.5s ease",
                  overflow: "hidden",
                }}
              >
                <div className="px-6 pb-6 sm:px-8 sm:pb-7">
                  <p
                    className="sm:text-lg text-base leading-relaxed transition-colors duration-300"
                    style={{
                      color: "#AFAFCA",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;
