import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import React, { useState } from "react";
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
          <Route exact path="/" element={<ClassList />} />
          <Route path="/about" component={AboutPage} />
          <Route path="/classes" element={<ClassList />} />
          <Route path="/class/:id" element={<ClassDetails />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/student/:id" element={<StudentDetails />} />
        </Routes>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;
