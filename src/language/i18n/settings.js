export const i18nSettings = {
  fallbackLng: "en",
  supportedLngs: ["en", "ar"],
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
  interpolation: {
    escapeValue: false,
  },
};
