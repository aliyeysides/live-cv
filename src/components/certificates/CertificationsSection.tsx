import Section from "../Section";

export interface Certificate {
  name: string;
  issuer?: string;
  issuedDate: Date;
  url: string;
}

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
      <ul>
        {certsSorted.map((cert) => (
          <li>
            <a href={cert.url} target="__blank">
              {cert.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificationsSection;
