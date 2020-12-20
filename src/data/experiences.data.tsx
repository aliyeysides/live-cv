import { Experience } from "../interfaces/experiences.interface";

export const experiences: Experience[] = [
  {
    companyName: "Vanguard Group",
    title: "Technical Team Manager",
    location: "Philadelphia",
    startDate: new Date(2018, 5),
    endDate: null,
    current: true,
    text: "Worked on cross-functional teams",
  },
  {
    companyName: "Chaikin Analytics",
    title: "Software Engineer",
    location: "Philadelphia",
    startDate: new Date(2017, 4),
    endDate: new Date(2018, 5),
    current: false,
    text: "Worked on cross-functional teams",
  },
  {
    companyName: "Jarvus Innovations",
    title: "Consulting Software Engineer",
    location: "Philadelphia",
    startDate: new Date(2016, 3),
    endDate: new Date(2017, 2),
    current: false,
    text: "Worked on cross-functional teams",
  },
  {
    companyName: "Oncourse Systems for Education",
    title: "Software Engineer",
    location: "Philadelphia",
    startDate: new Date(2015, 4),
    endDate: new Date(2016, 2),
    current: false,
    text: "Worked on cross-functional teams",
  },
  {
    companyName: "Tulip Hookah LLC",
    title: "Founder/Owner",
    location: "Philadelphia",
    startDate: new Date(2010, 9),
    endDate: new Date(2012, 8),
    current: false,
    text: "Worked on cross-functional teams",
  },
];
