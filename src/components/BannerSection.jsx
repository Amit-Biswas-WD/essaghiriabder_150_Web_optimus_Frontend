import { ArrowRight } from "lucide-react";

const BannerSection = () => {
  const handleScroll = () => {
    const plansSection = document.getElementById("plans");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex items-center justify-center h-[70vh] container mx-auto">
      {/* Main Hero Content */}
      <div className="text-center max-w-5xl mx-auto mt-14">
        {/* Headline */}
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-700 delay-100 `}
        >
          Where long-term work meets{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            trusted talent
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className={`text-lg text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto transition-all duration-700 delay-200`}
        >
          Connect companies, entrepreneurs, and influencers with skilled
          freelancers for reliable remote work—weekly, monthly, or multi-month
          engagements. No commissions. No complications.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 delay-300`}
        >
          <button
            onClick={handleScroll}
            className="group px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 hover:scale-105"
          >
            Get Started for Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={handleScroll}
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300 border-2 border-indigo-600 hover:scale-105"
          >
            Explore Freelancers
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
