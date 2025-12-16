import { ArrowRight } from "lucide-react";

const ButtonTwo = ({
  children,
  handleScroll,
  Icon,
  className = "",
  ...props
}) => {
  const baseClasses = `w-[240px] inline-flex items-center text-base font-medium leading-6 text-black bg-white shadow-lg border border-gray-100 hover:bg-gray-50 transition duration-300 ease-in-out`;

  const structureClasses = `relative py-3 px-6 rounded-full disabled:opacity-40 group justify-center`;

  const mergedClasses = `${baseClasses} ${structureClasses} ${className}`;

  return (
    <button onClick={handleScroll} className={mergedClasses} {...props}>
      <span className="transition duration-300 ease-in-out group-hover:-translate-x-1">
        {children}
      </span>

      <span className="overflow-hidden flex items-center transition-all duration-300 ease-in-out opacity-0 w-0 group-hover:opacity-100 group-hover:w-5 group-hover:ml-2">
        {Icon ? (
          <Icon className="w-5 h-5 flex-shrink-0" />
        ) : (
          <ArrowRight className="w-5 h-5 flex-shrink-0" />
        )}
      </span>
    </button>
  );
};

export default ButtonTwo;
