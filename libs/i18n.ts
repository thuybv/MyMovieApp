import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en";
import translationVI from "./locales/vi";

// the translations
export const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: "v3",
  react: {
    useSuspense: false,
  },
});
export { i18n };
