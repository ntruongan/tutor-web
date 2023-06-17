import React, { useContext } from "react";
import { LanguageContext } from "../contexts/translations";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  const { translations } = useContext(LanguageContext);

  return (
    <div className="language-switcher">
      <label htmlFor="language-select">
        {translations.languageSwitcher.selectLanguage}
      </label>
      <select
        id="language-select"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="en"> {translations.languageSwitcher.english}</option>
        <option value="vi"> {translations.languageSwitcher.vietnamese}</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
