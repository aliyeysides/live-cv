import React from "react";
import "./App.css";
import SpokenLanguagesSection from "./components/languages/SpokenLanguagesSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import CertificationsSection from "./components/certificates/CertificationsSection";
import FunSection from "./components/fun/FunSection";
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
