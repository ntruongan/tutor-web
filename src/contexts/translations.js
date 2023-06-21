import { createContext } from "react";

export const LanguageContext = createContext();

export const getTranslations = (language) => {
  try {
    // eslint-disable-next-line no-undef
    const translations = require(`../translations/${language}.json`);
    return translations;
  } catch (error) {
    console.error(`Error loading translations for language: ${language}`);
    return {};
  }
};
