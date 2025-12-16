// import { useEffect, useState } from "react";

// const NavSection = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`sticky top-0 z-50 bg-neutral-100 shadow-sm transition-all duration-300 ${
//         scrolled ? "border-b shadow-sm" : "border-b border-transparent"
//       }`}
//     >
//       <div className="container mx-auto">
//         <div className="flex items-center justify-between py-6">
//           <h2 className="text-4xl font-bold text-black">Essaghiriabder</h2>

//           <ul className="flex items-center gap-6 text-lg font-medium">
//             <li>
//               <a href="#specialties" className="hover:text-blue-600">
//                 Specialties
//               </a>
//             </li>
//             <li>
//               <a href="#freelancers" className="hover:text-blue-600">
//                 Freelancers & Companies
//               </a>
//             </li>
//             <li>
//               <a href="#plans" className="hover:text-blue-600">
//                 Plans
//               </a>
//             </li>
//             <li>
//               <a href="#faq" className="hover:text-blue-600">
//                 FAQ
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavSection;

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const NavSection = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Menu items from i18n
  const navItems = t("navSection.navItems", { returnObjects: true });

  return (
    <div
      className={`sticky top-0 z-50 bg-neutral-100 transition-all duration-300 ${
        scrolled ? "border-b shadow-sm" : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center gap-16">
            {/* Logo */}
            <h2 className="text-3xl font-bold text-black">
              {t("navSection.icon")}
            </h2>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-6 text-lg font-medium">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="!ml-auto hidden md:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="lg:hidden z-50 ml-auto"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute left-0 top-full w-full bg-neutral-200 overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 px-4 pb-6 text-lg font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  onClick={() => setOpen(false)}
                  className="block hover:text-blue-600"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="md:hidden block px-4 pb-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSection;
