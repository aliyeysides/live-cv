import SectionHeader from "../SectionHeader";

interface SpokenLanguagesSectionParams {
  spoken: string[];
}

const SpokenLanguagesSection = ({ spoken }: SpokenLanguagesSectionParams) => {
  return (
    <div className="spoken-languages-section">
      <SectionHeader header="Spoken Languages"></SectionHeader>
      <ol>
        {spoken.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ol>
    </div>
  );
};

export default SpokenLanguagesSection;
