import { ArrowUp } from "lucide-react";
import OutlineButton from "./ui/OutlineButton";

const LinkedButton = () => {
  const handleScroll = () => {
    const plansSection = document.getElementById("plans");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center md:justify-end justify-center container mx-auto lg:mt-16 md:mt-12 mt-8 px-3 md:px-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 delay-300">
        <OutlineButton handleScroll={handleScroll} Icon={ArrowUp} />
      </div>
    </div>
  );
};

export default LinkedButton;
