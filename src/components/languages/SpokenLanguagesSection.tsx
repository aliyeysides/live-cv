import Section from "../Section";

interface SpokenLanguagesSectionParams {
  spoken: string[];
}

const SpokenLanguagesSection = ({ spoken }: SpokenLanguagesSectionParams) => {
  return (
    <div className="spoken-languages-section">
      <Section header="Spoken Languages"></Section>
      <ol>
        {spoken.map((lang) => (
          <li>{lang}</li>
        ))}
      </ol>
    </div>
  );
};

export default SpokenLanguagesSection;
