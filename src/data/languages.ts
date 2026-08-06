export type LanguageProficiency =
  | "native"
  | "bilingual"
  | "professional"
  | "beginner";

export type Language = {
  name: string;
  proficiency: LanguageProficiency;
};

export const languageProficiencyLabels: Record<LanguageProficiency, string> = {
  native: "Native",
  bilingual: "Bilingual",
  professional: "Professional",
  beginner: "Beginner",
};

export const languages: Language[] = [
  { name: "Arabic", proficiency: "native" },
  { name: "English", proficiency: "bilingual" },
  { name: "French", proficiency: "bilingual" },
  { name: "Spanish", proficiency: "beginner" },
];
