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

const specialties = [
  {
    id: 1,
    title: "Accounting & Finance",
    icon: DollarSign,
    description: "Bookkeeping, auditing, payroll management",
    img: "/image/img1.png",
  },
  {
    id: 2,
    title: "Customer Support / Call Center",
    icon: Headphones,
    description: "Remote support, sales calls, lead qualification",
    img: "/image/img2.png",
  },
  {
    id: 3,
    title: "Graphic Design",
    icon: Palette,
    description: "Branding, UI/UX, creative visuals",
    img: "/image/img3.png",
  },
  {
    id: 4,
    title: "Programming & Development",
    icon: Code,
    description: "Web, mobile apps, backend, automation",
    img: "/image/img4.png",
  },
  {
    id: 5,
    title: "Marketing & Social Media",
    icon: Megaphone,
    description: "Campaigns, content, community management",
    img: "/image/img3.png",
  },
  {
    id: 6,
    title: "Writing & Translation",
    icon: PenTool,
    description: "Copywriting, technical writing, multilingual translation",
    img: "/image/img2.png",
  },
  {
    id: 7,
    title: "Business Assistance",
    icon: Users,
    description: "Virtual assistants, project coordination",
    img: "/image/img4.png",
  },
  {
    id: 8,
    title: "Video & Editing",
    icon: Video,
    description: "Motion graphics, editing, production",
    img: "/image/img1.png",
  },
];

const Specialties = () => {
  const [page, setPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Responsive card count based on screen size
  const getVisibleCount = () => {
    if (windowWidth < 640) return 1; // mobile
    if (windowWidth < 768) return 2; // sm
    if (windowWidth < 1024) return 2; // md
    if (windowWidth < 1280) return 3; // lg
    return 4; // xl
  };

  const visibleCount = getVisibleCount();
  const totalPages = Math.ceil(specialties.length / visibleCount);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset page if it exceeds total pages after resize
  useEffect(() => {
    if (page >= totalPages) {
      setPage(0);
    }
  }, [totalPages, page]);

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

  return (
    <div
      id="specialties"
      className="container mx-auto lg:my-20 md:my-14 my-12 scroll-mt-28 px-3 md:px-4"
    >
      <div className="flex items-center justify-between mb-6">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleCards.map((card) => {
          const isImg1 = card.img === "/image/img1.png";
          const textColorClass = isImg1 ? "text-white" : "text-black";

          return (
            <div
              key={card.id}
              className="group h-[500px] rounded-2xl overflow-hidden relative transition-all duration-500 ease-out"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>

              <span className="absolute top-3 right-3 z-20 px-3 py-1 bg-white text-[#333333] text-xs font-medium rounded-full shadow-lg">
                NEW
              </span>

              <div className="relative z-10 h-full p-3 grid grid-rows-[1fr_auto]">
                <div className="flex items-center justify-center text-center">
                  <h2
                    className={`${textColorClass} text-4xl font-semibold max-w-full`}
                  >
                    {card.title}
                  </h2>
                </div>

                <div className="flex flex-col gap-2 self-end pb-2">
                  <h2 className={`${textColorClass} text-lg font-medium`}>
                    {card.title}
                  </h2>
                  <p className={`${textColorClass} text-sm`}>
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Specialties;
