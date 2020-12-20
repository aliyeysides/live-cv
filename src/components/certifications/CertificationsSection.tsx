import "./CertificationsSection.scss";
import { Certificate } from "../../interfaces/certifications.interface";
import Section from "../Section";

interface CertificationsSectionParams {
  certs: Certificate[];
}

const CertificationsSection = ({ certs }: CertificationsSectionParams) => {
  const certsSorted = certs.sort(
    (a, b) => a.issuedDate.getTime() - b.issuedDate.getTime()
  );
  return (
    <div className="certifications-section">
      <Section header="Certifications"></Section>
      <ol>
        {certsSorted.map((cert) => (
          <li>
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
