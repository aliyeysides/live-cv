import React from "react";
import "./App.scss";
import SpokenLanguagesSection from "./components/languages/SpokenLanguagesSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import CertificationsSection from "./components/certifications/CertificationsSection";
import FunSection from "./components/fun/FunSection";
import { certificates } from "./data/certificates.data";
import { spokenlanguages } from "./data/spokenlanguages.data";
import { experiences } from "./data/experiences.data";

function App() {
  return (
    <div className="App">
      <CertificationsSection certs={certificates} />
      <ExperienceSection exp={experiences} />
      <SpokenLanguagesSection spoken={spokenlanguages} />
      <FunSection />
    </div>
  );
}

export default App;
