import { Certificate } from "../interfaces/certifications.interface";

export const certificates: Certificate[] = [
  {
    name: "Machine Learning by Stanford Online",
    issuer: "Coursera",
    issuedDate: new Date(2020, 10),
    url: "https://www.coursera.org/account/accomplishments/verify/25RWW9RMUT4N",
  },
  {
    name: "AWS Fundamentals: Going Cloud-Native",
    issuer: "Coursera",
    issuedDate: new Date(2020, 11, 1),
    url: "https://www.coursera.org/account/accomplishments/verify/QTUUY7P5YMQN",
  },
  {
    name: "AWS Fundamentals: Addressing Security Risk",
    issuer: "Coursera",
    issuedDate: new Date(2020, 11, 2),
    url: "https://www.coursera.org/account/accomplishments/verify/PAM5UTBSNNUM",
  },
];
