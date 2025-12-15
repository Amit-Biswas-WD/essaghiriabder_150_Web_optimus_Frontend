import { ArrowUp } from "lucide-react";

const LinkedButton = () => {
  const handleScroll = () => {
    const plansSection = document.getElementById("plans");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-end container mx-auto mt-16">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 delay-300">
        <button
          onClick={handleScroll}
          className="px-8 py-4 flex items-center gap-2 bg-white text-indigo-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300 border-2 border-indigo-600 hover:scale-105"
        >
          Explore Freelancers
          <ArrowUp />
        </button>
      </div>
    </div>
  );
};

export default LinkedButton;
