import React, { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
// import LanguageSwitcher from "../LanguageSwitcher";
import "../../styles/navbar.css";
import { LanguageContext } from "../../contexts/translations";

const Navbar = () => {
  const { translations } = useContext(LanguageContext);
  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">
          {translations.navbar.classes}
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <a href="/classes" className="navbar__link">
        {translations.navbar.classes}
      </a>
      {/* <div className="language-picker">
        <LanguageSwitcher />
      </div> */}
    </div>
  );
};

export default Navbar;
