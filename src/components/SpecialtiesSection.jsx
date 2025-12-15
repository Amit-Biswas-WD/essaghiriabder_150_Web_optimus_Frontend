import { useState, useRef } from "react";
import {
  Briefcase,
  DollarSign,
  Headphones,
  Palette,
  Code,
  Megaphone,
  PenTool,
  Users,
  Video,
  ArrowLeft,
  ChevronLeft,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

function SpecialtiesSection() {
  const [selectedCard, setSelectedCard] = useState(null);
  const scrollRef = useRef(null);

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

  const scrollCards = (direction) => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const getGradientColors = (colorClass) => {
    const colorMap = {
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
    return (
      colorMap[colorClass] ||
      "linear-gradient(to bottom right, #a855f7, #7c3aed)"
    );
  };

  return (
    <div
      id="specialties"
      className="container mx-auto lg:my-20 md:my-14 my-12 scroll-mt-28 px-3 md:px-4"
    >
      <div className="flex items-center justify-between">
        <h1 className="md:text-4xl text-2xl font-bold text-gray-900 md:mb-4 mb-2">
          Specialties
        </h1>

        <div className="flex justify-end items-center gap-2 mb-3">
          <button
            onClick={() => scrollCards("left")}
            className="relative p-1 group border border-gray-400 rounded-full"
          >
            <span className="block pr-1 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
              <ChevronLeft className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
              <ArrowLeft className="w-5 h-5" />
            </span>
          </button>

          <button
            onClick={() => scrollCards("right")}
            className="relative p-1 group border border-gray-400 rounded-full"
          >
            <span className="block pl-1 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
              <ChevronRight className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-scroll gap-6 mb-8 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* <style>{`
          .flex.overflow-x-scroll::-webkit-scrollbar {
            display: none;
          }
        `}</style> */}

        {specialties.map((specialty) => {
          const Icon = specialty.icon;
          return (
            <div
              key={specialty.id}
              onClick={() =>
                setSelectedCard(
                  specialty.id === selectedCard ? null : specialty.id
                )
              }
              className="group row-span-1 relative"
              style={{ minWidth: "320px" }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                // style={{
                //   background: getGradientColors(specialty.color),
                //   filter: "blur(40px)",
                // }}
              ></div>
              <div
                className={`relative rounded-2xl p-6 border transition-all duration-500 h-full ${
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
                  style={{
                    background: getGradientColors(specialty.color),
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {specialty.title}
                </h3>
                <p className="text-white text-sm mb-4">
                  {specialty.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div
        className="rounded-2xl p-8 border text-center"
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.5)",
          backdropFilter: "blur(4px)",
          borderColor: "rgba(168, 85, 247, 0.2)",
        }}
      >
        <Briefcase className="w-12 h-12 text-purple-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">And many more...</h2>
        <p className="text-purple-300">
          Explore our comprehensive network of professionals across dozens of
          specialized fields
        </p>
      </div> */}
    </div>
  );
}

export default SpecialtiesSection;
