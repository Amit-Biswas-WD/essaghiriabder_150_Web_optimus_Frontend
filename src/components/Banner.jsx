import { ArrowRight } from "lucide-react";
import OutlineButton from "./ui/OutlineButton";
import Button from "./ui/Button";
import ButtonTwo from "./ui/ButtonTwo";

const Banner = () => {
  const handleScroll = () => {
    const plansSection = document.getElementById("plans");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex items-center justify-center h-[60vh] container mx-auto px-3 md:px-4 lg:my-0 md:my-0 mt-16 mb-20">
      {/* Main Hero Content */}
      <div className="text-center max-w-5xl mx-auto mt-14">
        {/* Headline */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-700 delay-100 `}
        >
          Where long-term work meets
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            trusted talent
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className={`text-lg text-gray-600 xl:mb-10 lg:mb-8 md:mb-6 mb-4 leading-relaxed max-w-4xl mx-auto transition-all duration-700 delay-200`}
        >
          Connect companies, entrepreneurs, and influencers with skilled
          freelancers for reliable remote work—weekly, monthly, or multi-month
          engagements. No commissions. No complications.
        </p>

        {/* CTA Buttons */}
        {/* <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 delay-300`}
        >
          <Button Icon={ArrowRight} handleScroll={handleScroll} />

          <OutlineButton handleScroll={handleScroll} />
        </div> */}

        <div className="flex items-center justify-center p-4">
          {/* Container for the two buttons with horizontal spacing */}
          <div className="md:flex items-center gap-4">
            {/* Access API Button */}
            <ButtonTwo
              className="border-red-500 bg-transparent"
              handleScroll={handleScroll}
            >
              Get Started for Free
            </ButtonTwo>

            {/* Try Hailuo Now Button */}
            <ButtonTwo
              className="border-green-500 bg-transparent md:mt-0 mt-4"
              handleScroll={handleScroll}
            >
              Explore Freelancers
            </ButtonTwo>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
