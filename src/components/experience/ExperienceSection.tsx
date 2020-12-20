import { Experience } from "../../interfaces/experiences.interface";
import Section from "../Section";

interface ExperienceSectionParams {
  exp: Experience[];
}

const ExperienceSection = ({ exp }: ExperienceSectionParams) => {
  return (
    <div>
      <Section header="Experience"></Section>
      <ol>
        {exp.map((x) => (
          <div className="experience-card">
            <h2>{x.companyName}</h2>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default ExperienceSection;
