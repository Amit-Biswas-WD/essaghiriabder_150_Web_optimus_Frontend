const Button = ({ handleScroll, Icon }) => {
  return (
    <button
      onClick={handleScroll}
      className="group md:px-8 px-6 md:py-4 py-2.5 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 hover:scale-105"
    >
      Get Started for Free
      {Icon && (
        <Icon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
};

export default Button;
