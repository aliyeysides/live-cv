interface SectionParams {
  header: string;
}

const Section = ({ header }: SectionParams) => {
  return <h1>{header}</h1>;
};

export default Section;
