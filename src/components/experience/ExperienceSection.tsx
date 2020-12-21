import { Experience } from "../../interfaces/experiences.interface";
import SectionHeader from "../SectionHeader";

interface ExperienceSectionParams {
  exp: Experience[];
}

const ExperienceSection = ({ exp }: ExperienceSectionParams) => {
  return (
    <div className="experience-section">
      <SectionHeader header="Experience"></SectionHeader>
      {exp.map((x) => (
        <div key={x.startDate.getTime()} className="experience-card">
          <h2>{x.companyName}</h2>
          <p>{x.title}</p>
          <p>{x.location}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
