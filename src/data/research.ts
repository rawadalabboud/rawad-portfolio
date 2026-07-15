export type ResearchStatus =
  | "doctoral"
  | "published"
  | "submitted"
  | "completed";

export type ResearchKind = "thesis" | "book-chapter" | "paper" | "training";

export type ResearchLink = {
  label: string;
  href: string;
};

export type ResearchItem = {
  id: string;
  kind: ResearchKind;
  status: ResearchStatus;
  statusLabel: string;
  title: string;
  subtitle?: string;
  venue: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  authors?: string[];
  links: ResearchLink[];
  coverImage?: string;
  certificatePath?: string;
  featured?: boolean;
};

export const phdResearch: ResearchItem = {
  id: "phd-rtms-biomarkers",
  kind: "thesis",
  status: "doctoral",
  statusLabel: "Doctoral research",
  title:
    "Biomarkers of response to repetitive transcranial magnetic stimulation (rTMS) for treatment-resistant depression",
  venue: "Paris Brain Institute & Clariane",
  period: "2023 to 2025",
  description:
    "Doctoral research on predicting who responds to rTMS for treatment-resistant depression, combining EEG signal processing, clinical variables, and machine learning to surface response biomarkers.",
  highlights: [
    "Resting-state and task EEG feature engineering",
    "Clinical and speech-derived covariates",
    "Response prediction for neuromodulation outcomes",
    "Reproducible Python pipelines for multimodal psychiatric data",
    "Close collaboration with clinicians and researchers",
  ],
  tags: ["rTMS", "EEG", "Depression", "Biomarkers", "MNE-Python", "ML"],
  links: [],
  featured: true,
};

export const researchOutputs: ResearchItem[] = [
  {
    id: "book-chapter-personnalisation",
    kind: "book-chapter",
    status: "published",
    statusLabel: "Published · May 2026",
    title: "Personnalisation de la prise en charge en psychiatrie",
    subtitle:
      "Exemples en matière de diagnostic, de neuromodulation thérapeutique et de psychopharmacologie",
    venue: "Physiologie des maladies mentales, Chapitre 21",
    period: "May 6, 2026",
    description:
      "Co-authored chapter on personalized psychiatric care, with examples spanning diagnosis, therapeutic neuromodulation, and psychopharmacology, in a reference monograph edited by Bruno Millet.",
    highlights: [
      "Personalized medicine framing in psychiatry",
      "Therapeutic neuromodulation and rTMS context",
      "Clinical translation of neurobiological profiling",
      "Published by Elsevier Masson (288 pp.)",
    ],
    authors: [
      "Bruno Millet",
      "Rawad Al Abboud",
      "Bertrand Saudreau",
      "Son Ha Lam",
      "Florian Ferreri",
      "Alexis Bourla",
      "Stéphane Mouchabac",
      "Thibaut Dondaine",
    ],
    tags: ["Psychiatry", "rTMS", "Personalized Medicine", "Book Chapter"],
    links: [
      {
        label: "Elsevier Masson",
        href: "https://www.elsevier-masson.fr/physiologie-des-maladies-mentales-9782294781339.html",
      },
      {
        label: "FNAC",
        href: "https://www.fnac.com/a22516699/Bruno-Millet-Physiologie-des-maladies-mentales",
      },
    ],
    coverImage: "/research/book-chapter-maladies-mentales-card.png",
  },
  {
    id: "acceptens-paper",
    kind: "paper",
    status: "submitted",
    statusLabel: "Submitted",
    title:
      "Public Acceptability of Repetitive Transcranial Magnetic Stimulation in Europe: A Cross-National Study (Acceptens)",
    venue: "Journal of Affective Disorders",
    period: "Submitted · Jun 2026",
    description:
      "Co-authored manuscript studying how acceptable rTMS is perceived across European countries, with reproducible analysis code published alongside the study materials.",
    highlights: [
      "Cross-national survey design and analysis",
      "Public acceptability of neuromodulation therapies",
      "Reproducible research workflow",
      "Manuscript no. JAFD-D-26-05988",
    ],
    authors: [
      "Alexis Bourla",
      "Florian Ferreri",
      "Alice Person",
      "Rawad Al Abboud",
      "Nicolas Jurado",
      "Biné Mariam Ndiongue",
      "Fatoumata Coulibaly",
      "Bruno Millet",
      "Stéphane Mouchabac",
    ],
    tags: ["rTMS", "Acceptability", "Cross-national", "Survey", "Reproducibility"],
    links: [
      {
        label: "Repro repo",
        href: "https://github.com/rawadalabboud/acceptens_repro",
      },
    ],
    coverImage: "/research/acceptens-manuscript-card.png",
  },
  {
    id: "science-factory-2025",
    kind: "training",
    status: "completed",
    statusLabel: "Completed · May 2025",
    title: "11th Science Factory: TMS–EEG Summer School and Workshop",
    venue: "Aalto University · Espoo, Finland",
    period: "May 24 to 30, 2025",
    description:
      "Intensive international summer school on TMS–EEG methodology: lectures from leading researchers, hands-on device practice, group coaching, and student presentations in the TMS–EEG community.",
    highlights: [
      "TMS–EEG methodology and data analysis workshop",
      "Hands-on sessions with TMS–EEG devices",
      "Mentored group work with senior coaches",
      "Networking with international TMS–EEG researchers",
    ],
    tags: ["TMS", "EEG", "Neuromodulation", "Summer School", "Aalto"],
    links: [
      {
        label: "Event page",
        href: "https://www.aalto.fi/en/events/11th-science-factory-tms-eeg-summer-school-and-workshop",
      },
      {
        label: "Certificate",
        href: "/research/science-factory-certificate.pdf",
      },
    ],
    certificatePath: "/research/science-factory-certificate.pdf",
    coverImage: "/research/science-factory-aalto.jpg",
  },
];
