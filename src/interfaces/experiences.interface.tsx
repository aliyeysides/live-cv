export interface Experience {
  companyName: string;
  title: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  current: boolean;
  text: string;
}
