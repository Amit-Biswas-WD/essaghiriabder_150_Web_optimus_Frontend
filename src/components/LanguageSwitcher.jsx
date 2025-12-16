import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="flex items-center gap-4">
      <button
        className="btn rounded-2xl border px-2 py-1"
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <button
        className="btn rounded-2xl border px-2 py-1"
        onClick={() => changeLanguage("ar")}
      >
        AR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
