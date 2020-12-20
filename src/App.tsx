import React from "react";
import "./App.scss";
import SpokenLanguagesSection from "./components/languages/SpokenLanguagesSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import CertificationsSection from "./components/certifications/CertificationsSection";
import FunSection from "./components/fun/FunSection";
import { certsData } from "./data/certificates.data";
import { spokenlanguagesData } from "./data/spokenlanguages.data";

function App() {
  return (
    <div className="App">
      <CertificationsSection certs={certsData} />
      <ExperienceSection />
      <SpokenLanguagesSection spoken={spokenlanguagesData} />
      <FunSection />
    </div>
  );
}

export default App;
