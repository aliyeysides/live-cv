import React from "react";
import "./App.css";
import SpokenLanguagesSection from "./SpokenLanguagesSection";
import ExperienceSection from "./ExperienceSection";
import CertificationsSection from "./CertificationsSection";
import FunSection from "./FunSection";
import { CertsData } from "./data/certificates-data";

function App() {
  return (
    <div className="App">
      <CertificationsSection certs={CertsData} />
      <ExperienceSection />
      <SpokenLanguagesSection />
      <FunSection />
    </div>
  );
}

export default App;
