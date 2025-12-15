const OutlineButton = ({ handleScroll, Icon }) => {
  return (
    <button
      onClick={handleScroll}
      className="md:px-8 px-6 md:py-4 py-2.5 flex items-center gap-2 bg-white text-indigo-600 rounded-lg font-semibold text-lg border-2 border-indigo-600"
    >
      Explore Plans
      {Icon && <Icon className="w-6 h-6" />}
    </button>
  );
};

export default OutlineButton;
