import React from "react";
import "./App.css";
import SpokenLanguagesSection from "./SpokenLanguagesSection";
import ExperienceSection from "./ExperienceSection";
import CertificationsSection from "./CertificationsSection";
import FunSection from "./FunSection";

function App() {
  return (
    <div className="App">
      <CertificationsSection />
      <ExperienceSection />
      <SpokenLanguagesSection />
      <FunSection />
    </div>
  );
}

export default App;
