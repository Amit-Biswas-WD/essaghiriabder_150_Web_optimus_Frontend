import { useEffect, useState } from "react";

const NavSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "border-b shadow-sm" : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between my-6">
          <h2 className="text-4xl font-bold text-black">Essaghiriabder</h2>

          <ul className="flex items-center gap-6 text-lg font-medium">
            <li>
              <a href="#freelancers" className="hover:text-blue-600">
                Freelancers & Companies
              </a>
            </li>
            <li>
              <a href="#plans" className="hover:text-blue-600">
                Plans
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-blue-600">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavSection;
