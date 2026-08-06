export type EducationSchool = {
  name: string;
  href?: string;
};

export type EducationItem = {
  period: string;
  degree: string;
  schools: EducationSchool[];
  schoolSeparator?: string;
};

export const education: EducationItem[] = [
  {
    period: "Oct 2025 to Jun 2026",
    degree: "M.Sc. Data Science & Business Analysis",
    schools: [
      { name: "EDC Paris Business School", href: "https://www.edcparis.edu/en/" },
    ],
  },
  {
    period: "2021 to 2022",
    degree: "M.Sc. Signal & Image Processing",
    schools: [
      { name: "CentraleSupélec", href: "https://www.centralesupelec.fr/" },
      {
        name: "Université Paris-Saclay",
        href: "https://www.universite-paris-saclay.fr/en",
      },
    ],
    schoolSeparator: ", ",
  },
  {
    period: "2017 to 2021",
    degree: "Engineering Degree, Telecommunications & Computer Science",
    schools: [
      { name: "Lebanese University", href: "https://www.ul.edu.lb/" },
      {
        name: "Faculty of Engineering",
        href: "https://www.ul.edu.lb/en/colleges-faculties-details/343/Faculty-of-Engineering",
      },
    ],
    schoolSeparator: ", ",
  },
];
