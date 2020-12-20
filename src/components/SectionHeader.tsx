interface SectionHeaderParams {
  header: string;
}

const SectionHeader = ({ header }: SectionHeaderParams) => {
  return <h1>{header}</h1>;
};

export default SectionHeader;
