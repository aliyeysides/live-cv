import { Experience } from "../../interfaces/experiences.interface";
import SectionHeader from "../SectionHeader";

interface ExperienceSectionParams {
  exp: Experience[];
}

const ExperienceSection = ({ exp }: ExperienceSectionParams) => {
  return (
    <div className="experience-section">
      <SectionHeader header="Experience"></SectionHeader>
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
