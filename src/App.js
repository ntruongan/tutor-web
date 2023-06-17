import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "react-router-dom";
import React, { useState, useContext } from "react";
import Navbar from "./components/common/Navbar";
import AboutPage from "./components/pages/AboutPage";
import ClassList from "./components/pages/ClassList";
import ClassDetails from "./components/pages/ClassDetails";
import StudentList from "./components/pages/StudentList";
import StudentDetails from "./components/pages/StudentDetails";
import { LanguageContext, getTranslations } from "./contexts/translations";

const App = () => {
  const [language, setLanguage] = useState("vi");
  const translations = getTranslations(language);
  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" component={ClassList} />
          <Route path="/about" component={AboutPage} />
          <Route path="/classes" component={ClassList} />
          <Route path="/class/:id" component={ClassDetails} />
          <Route path="/students" component={StudentList} />
          <Route path="/student/:id" component={StudentDetails} />
        </Routes>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;
