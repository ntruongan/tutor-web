import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/translations";

const ClassList = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <div>
      <h2>{translations.classListPage.pageTitle}</h2>
      <p>This is the class list page.</p>
    </div>
  );
};

export default ClassList;
