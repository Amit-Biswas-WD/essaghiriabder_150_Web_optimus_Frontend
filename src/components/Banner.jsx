import ButtonTwo from "./ui/ButtonTwo";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  const handleScroll = () => {
    const plansSection = document.getElementById("plans");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      style={{ backgroundImage: 'url("/image/banner.png")' }}
      className="flex items-center justify-center bg-cover bg-center xl:h-[70vh] lg:h-[80vh] sm:h-[80vh] h-[70vh] w-full mx-auto px-3 md:px-4 lg:my-0 md:my-0 lg:mb-20 mb-0"
    >
      {/* Main Hero Content */}
      <div className="text-center max-w-5xl mx-auto mt-14">
        {/* Headline */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 md:mb-6 mb-2 leading-tight transition-all duration-700 delay-100 `}
        >
          {t("heroSection.title")}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"></span>
        </h1>

        {/* Sub-headline */}
        <p
          className={`text-lg text-gray-600 xl:mb-10 lg:mb-8 md:mb-6 mb-2 leading-relaxed max-w-4xl mx-auto transition-all duration-700 delay-200`}
        >
          {t("heroSection.subtitle")}
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center p-4 md:pb-0 pb-16">
          {/* Container for the two buttons with horizontal spacing */}
          <div className="md:flex items-center gap-4">
            {/* Access API Button */}
            <ButtonTwo
              className="border-red-500 bg-transparent "
              handleScroll={handleScroll}
            >
              {t("heroSection.getButton")}
            </ButtonTwo>

            {/* Try Hailuo Now Button */}
            <ButtonTwo
              className="border-green-500 bg-transparent md:mt-0 mt-4"
              handleScroll={handleScroll}
            >
              {t("heroSection.exploreButton")}
            </ButtonTwo>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
