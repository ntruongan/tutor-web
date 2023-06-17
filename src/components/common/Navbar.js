import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";
import "../../styles/navbar.css";
import { LanguageContext, getTranslations } from "../../contexts/translations";

const Navbar = () => {
  const { translations } = useContext(LanguageContext);
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link to="/classes" className="navbar__link">
            {translations.navbar.classes}
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/teachers" className="navbar__link">
            {translations.navbar.teachers}
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/students" className="navbar__link">
            {translations.navbar.students}
          </Link>
        </li>
      </ul>
      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
