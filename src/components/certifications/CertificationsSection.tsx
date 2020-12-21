import "./CertificationsSection.scss";
import { Certificate } from "../../interfaces/certifications.interface";
import SectionHeader from "../SectionHeader";

interface CertificationsSectionParams {
  certs: Certificate[];
}

const CertificationsSection = ({ certs }: CertificationsSectionParams) => {
  const certsSorted = certs.sort(
    (a, b) => a.issuedDate.getTime() - b.issuedDate.getTime()
  );
  return (
    <div className="certifications-section">
      <SectionHeader header="Certifications"></SectionHeader>
      <ol>
        {certsSorted.map((cert) => (
          <li key={cert.url}>
            <a href={cert.url} target="__blank">
              {cert.name}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CertificationsSection;
