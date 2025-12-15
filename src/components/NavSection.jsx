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

const NavSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 bg-neutral-100 transition-all duration-300 ${
        scrolled ? "border-b shadow-sm" : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <h2 className="text-3xl font-bold text-black">Essaghiriabder</h2>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 text-lg font-medium">
            <li>
              <a href="#specialties" className="hover:text-blue-600">
                Specialties
              </a>
            </li>
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

          {/* Mobile Button */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 pb-6 text-lg font-medium">
            <li>
              <a
                href="#specialties"
                onClick={() => setOpen(false)}
                className="block hover:text-blue-600"
              >
                Specialties
              </a>
            </li>
            <li>
              <a
                href="#freelancers"
                onClick={() => setOpen(false)}
                className="block hover:text-blue-600"
              >
                Freelancers & Companies
              </a>
            </li>
            <li>
              <a
                href="#plans"
                onClick={() => setOpen(false)}
                className="block hover:text-blue-600"
              >
                Plans
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={() => setOpen(false)}
                className="block hover:text-blue-600"
              >
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
