import { useState, useRef, useEffect, useMemo } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const [heights, setHeights] = useState([]);
  const contentRefs = useRef([]);

  // Memoize faqs to avoid recalculating on every render
  const faqs = useMemo(
    () => t("FAQSection.questions", { returnObjects: true }),
    [t]
  );

  useEffect(() => {
    const newHeights = contentRefs.current.map((ref) => ref?.scrollHeight || 0);
    setHeights(newHeights);
  }, [faqs]); // only recalc when faqs change

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="container mx-auto scroll-mt-28 px-3 md:px-4">
      <h2 className="md:text-4xl text-2xl font-bold text-gray-900 mb-4">
        {t("FAQSection.title")}
      </h2>

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
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span
                  className="text-lg sm:text-xl font-medium pr-4 transition-colors duration-300"
                  style={{
                    color: isOpen ? "#FFFFFF" : "#0F172A",
                  }}
                >
                  {faq.q}
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
                    {faq.a}
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
