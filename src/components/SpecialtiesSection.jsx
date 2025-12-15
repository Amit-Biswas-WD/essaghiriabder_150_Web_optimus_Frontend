// import { useState, useRef } from "react";
// import {
//   DollarSign,
//   Headphones,
//   Palette,
//   Code,
//   Megaphone,
//   PenTool,
//   Users,
//   Video,
//   ArrowLeft,
//   ChevronLeft,
//   ArrowRight,
//   ChevronRight,
// } from "lucide-react";

// function SpecialtiesSection() {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const scrollRef = useRef(null);

//   const specialties = [
//     {
//       id: 1,
//       title: "Accounting & Finance",
//       icon: DollarSign,
//       description: "Bookkeeping, auditing, payroll management",
//       color: "from-emerald-500 to-teal-600",
//     },
//     {
//       id: 2,
//       title: "Customer Support / Call Center",
//       icon: Headphones,
//       description: "Remote support, sales calls, lead qualification",
//       color: "from-blue-500 to-indigo-600",
//     },
//     {
//       id: 3,
//       title: "Graphic Design",
//       icon: Palette,
//       description: "Branding, UI/UX, creative visuals",
//       color: "from-pink-500 to-rose-600",
//     },
//     {
//       id: 4,
//       title: "Programming & Development",
//       icon: Code,
//       description: "Web, mobile apps, backend, automation",
//       color: "from-purple-500 to-violet-600",
//     },
//     {
//       id: 5,
//       title: "Marketing & Social Media",
//       icon: Megaphone,
//       description: "Campaigns, content, community management",
//       color: "from-orange-500 to-amber-600",
//     },
//     {
//       id: 6,
//       title: "Writing & Translation",
//       icon: PenTool,
//       description: "Copywriting, technical writing, multilingual translation",
//       color: "from-cyan-500 to-blue-600",
//     },
//     {
//       id: 7,
//       title: "Business Assistance",
//       icon: Users,
//       description: "Virtual assistants, project coordination",
//       color: "from-fuchsia-500 to-purple-600",
//     },
//     {
//       id: 8,
//       title: "Video & Editing",
//       icon: Video,
//       description: "Motion graphics, editing, production",
//       color: "from-red-500 to-pink-600",
//     },
//   ];

//   const scrollCards = (direction) => {
//     if (scrollRef.current) {
//       const amount = direction === "left" ? -400 : 400;
//       scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
//     }
//   };

//   const getGradientColors = (colorClass) => {
//     const colorMap = {
//       "from-emerald-500 to-teal-600":
//         "linear-gradient(to bottom right, #10b981, #0d9488)",
//       "from-blue-500 to-indigo-600":
//         "linear-gradient(to bottom right, #3b82f6, #4f46e5)",
//       "from-pink-500 to-rose-600":
//         "linear-gradient(to bottom right, #ec4899, #e11d48)",
//       "from-purple-500 to-violet-600":
//         "linear-gradient(to bottom right, #a855f7, #7c3aed)",
//       "from-orange-500 to-amber-600":
//         "linear-gradient(to bottom right, #f97316, #d97706)",
//       "from-cyan-500 to-blue-600":
//         "linear-gradient(to bottom right, #06b6d4, #2563eb)",
//       "from-fuchsia-500 to-purple-600":
//         "linear-gradient(to bottom right, #d946ef, #9333ea)",
//       "from-red-500 to-pink-600":
//         "linear-gradient(to bottom right, #ef4444, #db2777)",
//     };
//     return (
//       colorMap[colorClass] ||
//       "linear-gradient(to bottom right, #a855f7, #7c3aed)"
//     );
//   };

//   return (
//     <div
//       id="specialties"
//       className="container mx-auto lg:my-20 md:my-14 my-12 scroll-mt-28 px-3 md:px-4"
//     >
//       <div className="flex items-center justify-between">
//         <h1 className="md:text-4xl text-2xl font-bold text-gray-900 md:mb-4 mb-2">
//           Specialties
//         </h1>

//         <div className="flex justify-end items-center gap-2 mb-3">
//           <button
//             onClick={() => scrollCards("left")}
//             className="relative p-1 group border border-gray-400 rounded-full"
//           >
//             <span className="block pr-1 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
//               <ChevronLeft className="w-5 h-5" />
//             </span>
//             <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
//               <ArrowLeft className="w-5 h-5" />
//             </span>
//           </button>

//           <button
//             onClick={() => scrollCards("right")}
//             className="relative p-1 group border border-gray-400 rounded-full"
//           >
//             <span className="block pl-1 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
//               <ChevronRight className="w-5 h-5" />
//             </span>
//             <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
//               <ArrowRight className="w-5 h-5" />
//             </span>
//           </button>
//         </div>
//       </div>

//       <div
//         ref={scrollRef}
//         className="flex overflow-x-scroll gap-6 mb-8 pb-4"
//         style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//       >
//         {specialties.map((specialty) => {
//           const Icon = specialty.icon;
//           return (
//             <div
//               key={specialty.id}
//               onClick={() =>
//                 setSelectedCard(
//                   specialty.id === selectedCard ? null : specialty.id
//                 )
//               }
//               className="group row-span-1 relative"
//               style={{ minWidth: "320px" }}
//             >
//               <div className="absolute inset-0 rounded-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
//               <div
//                 className={`relative rounded-2xl p-6 border transition-all duration-500 h-full ${
//                   selectedCard === specialty.id ? "ring-2 ring-white/50" : ""
//                 }`}
//                 style={{
//                   backgroundColor: "rgba(30, 41, 59, 0.9)",
//                   backdropFilter: "blur(4px)",
//                   borderColor: "rgba(168, 85, 247, 0.2)",
//                   minHeight: "240px",
//                 }}
//               >
//                 <div
//                   className="w-16 h-16 mb-4 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500"
//                   style={{
//                     background: getGradientColors(specialty.color),
//                   }}
//                 >
//                   <Icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   {specialty.title}
//                 </h3>
//                 <p className="text-white text-sm mb-4">
//                   {specialty.description}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default SpecialtiesSection;

import { useState, useEffect } from "react";
import {
  DollarSign,
  Headphones,
  Palette,
  Code,
  Megaphone,
  PenTool,
  Users,
  Video,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

function SpecialtiesSection() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);
  const [page, setPage] = useState(0);

  const specialties = [
    {
      id: 1,
      title: "Accounting & Finance",
      icon: DollarSign,
      description: "Bookkeeping, auditing, payroll management",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: 2,
      title: "Customer Support / Call Center",
      icon: Headphones,
      description: "Remote support, sales calls, lead qualification",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 3,
      title: "Graphic Design",
      icon: Palette,
      description: "Branding, UI/UX, creative visuals",
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 4,
      title: "Programming & Development",
      icon: Code,
      description: "Web, mobile apps, backend, automation",
      color: "from-purple-500 to-violet-600",
    },
    {
      id: 5,
      title: "Marketing & Social Media",
      icon: Megaphone,
      description: "Campaigns, content, community management",
      color: "from-orange-500 to-amber-600",
    },
    {
      id: 6,
      title: "Writing & Translation",
      icon: PenTool,
      description: "Copywriting, technical writing, multilingual translation",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 7,
      title: "Business Assistance",
      icon: Users,
      description: "Virtual assistants, project coordination",
      color: "from-fuchsia-500 to-purple-600",
    },
    {
      id: 8,
      title: "Video & Editing",
      icon: Video,
      description: "Motion graphics, editing, production",
      color: "from-red-500 to-pink-600",
    },
  ];

  // Update visibleCount based on screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setVisibleCount(5); // XL
      else if (window.innerWidth >= 1024) setVisibleCount(4); // LG
      else if (window.innerWidth >= 768) setVisibleCount(3); // MD
      else setVisibleCount(2); // SM
      setPage(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(specialties.length / visibleCount);
  const visibleCards = specialties.slice(
    page * visibleCount,
    page * visibleCount + visibleCount
  );

  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };
  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const getGradientColors = (colorClass) => {
    const map = {
      "from-emerald-500 to-teal-600":
        "linear-gradient(to bottom right, #10b981, #0d9488)",
      "from-blue-500 to-indigo-600":
        "linear-gradient(to bottom right, #3b82f6, #4f46e5)",
      "from-pink-500 to-rose-600":
        "linear-gradient(to bottom right, #ec4899, #e11d48)",
      "from-purple-500 to-violet-600":
        "linear-gradient(to bottom right, #a855f7, #7c3aed)",
      "from-orange-500 to-amber-600":
        "linear-gradient(to bottom right, #f97316, #d97706)",
      "from-cyan-500 to-blue-600":
        "linear-gradient(to bottom right, #06b6d4, #2563eb)",
      "from-fuchsia-500 to-purple-600":
        "linear-gradient(to bottom right, #d946ef, #9333ea)",
      "from-red-500 to-pink-600":
        "linear-gradient(to bottom right, #ef4444, #db2777)",
    };
    return map[colorClass];
  };

  return (
    <div
      id="specialties"
      className="container mx-auto lg:my-20 md:my-14 my-12 scroll-mt-28 px-3 md:px-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="md:text-4xl text-2xl font-bold text-gray-900">
          Specialties
        </h1>
        <div className="flex gap-2">
          <button
            onClick={prevPage}
            disabled={page === 0}
            className="relative p-1 border border-gray-400 rounded-full disabled:opacity-40 group"
          >
            <span className="block pr-1 group-hover:opacity-0 transition">
              <ChevronLeft className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <ArrowLeft className="w-5 h-5" />
            </span>
          </button>
          <button
            onClick={nextPage}
            disabled={page === totalPages - 1}
            className="relative p-1 border border-gray-400 rounded-full disabled:opacity-40 group"
          >
            <span className="block pl-1 group-hover:opacity-0 transition">
              <ChevronRight className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>

      {/* Cards Row inside container */}
      <div className="overflow-hidden">
        <div className="flex gap-6">
          {visibleCards.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <div
                key={specialty.id}
                onClick={() =>
                  setSelectedCard(
                    selectedCard === specialty.id ? null : specialty.id
                  )
                }
                className={`flex-shrink-0 ${
                  visibleCount === 2
                    ? "w-1/2"
                    : visibleCount === 3
                    ? "w-1/3"
                    : visibleCount === 4
                    ? "w-1/4"
                    : "w-1/5"
                }`}
              >
                <div
                  className={`relative rounded-2xl p-6 border transition-all duration-500 h-full group ${
                    selectedCard === specialty.id ? "ring-2 ring-white/50" : ""
                  }`}
                  style={{
                    backgroundColor: "rgba(30, 41, 59, 0.9)",
                    backdropFilter: "blur(4px)",
                    borderColor: "rgba(168, 85, 247, 0.2)",
                    minHeight: "240px",
                  }}
                >
                  <div
                    className="w-16 h-16 mb-4 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500"
                    style={{ background: getGradientColors(specialty.color) }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {specialty.title}
                  </h3>
                  <p className="text-white text-sm">{specialty.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SpecialtiesSection;
