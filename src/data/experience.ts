export type ExperienceOrg = {
  name: string;
  href?: string;
};

export type ExperienceCaseStudy = {
  period: string;
  title: string;
  organizations: ExperienceOrg[];
  orgSeparator?: string;
  location: string;
  problem: string;
  solution: string;
  impact: string[];
  technologies: string[];
};

export const experience: ExperienceCaseStudy[] = [
  {
    period: "Oct 2025 – Present",
    title: "GenAI Engineer",
    organizations: [
      { name: "Hipto", href: "https://hipto.com" },
      { name: "Lead Generation" },
    ],
    orgSeparator: " · ",
    location: "Paris",
    problem:
      "Hipto's lead-generation business needed AI systems that could qualify inbound calls at scale, answer insurance questions from live documentation, surface offers inside LLM chat interfaces, and score lead conversion, all in production, not as prototypes.",
    solution:
      "Shipped a Click-to-Call voice platform on NestJS and Retell AI with 7 agent pipelines across 5 verticals. Built a hybrid RAG assistant for Groupe Hueber Assurances with BM25 + cosine retrieval and LLM reranking. Delivered Hipto Offer Hub as an MCP app in ChatGPT and Claude. Prototyped ML conversion scoring with CatBoost, calibration, and temporal backtests.",
    impact: [
      "4,400+ AI-qualified calls across 5 verticals and 13 experiment profiles",
      "RAG assistant deployed for 150k+ insured clients with a 40-question evaluation dataset",
      "57 offers automated via MCP with 10+ AI tools and eligibility controls",
      "7 voice-agent pipelines covering transfer, tracking, relance, and transcript extraction",
    ],
    technologies: [
      "NestJS",
      "Retell AI",
      "OpenAI",
      "MCP",
      "Skybridge",
      "BM25",
      "Redis",
      "CatBoost",
      "FastAPI",
      "Google App Engine",
    ],
  },
  {
    period: "2023 – 2025",
    title: "Research Engineer, Data Engineering & ML",
    organizations: [
      { name: "Clariane", href: "https://www.clariane.com" },
      {
        name: "Paris Brain Institute",
        href: "https://www.institutducerveau-icm.org/en/",
      },
    ],
    orgSeparator: " & ",
    location: "Paris",
    problem:
      "Psychiatry research teams at Clariane and the Paris Brain Institute had raw EEG, clinical, and vocal data scattered across formats, unusable for statistical analysis or predictive modeling without heavy manual prep.",
    solution:
      "Built Python ingestion and cleaning pipelines for multimodal biomedical data. Automated structuring of EEG, clinical records, and speech-derived features into analysis-ready datasets. Coordinated with clinicians and neuroscientists on study design and co-authored submitted manuscripts.",
    impact: [
      "Reliable datasets for psychiatric care and neuromodulation research",
      "Improved statistical analysis reproducibility across research teams",
      "Co-authored 2 submitted articles on rTMS acceptability and personalized psychiatric care",
    ],
    technologies: [
      "Python",
      "pandas",
      "MNE-Python",
      "Signal Processing",
      "EEG",
      "Machine Learning",
      "Data Visualization",
    ],
  },
  {
    period: "Apr – Sep 2022",
    title: "ML Research Intern",
    organizations: [{ name: "MINDig", href: "https://mindig.io/" }],
    location: "Rennes",
    problem:
      "Early Parkinson's disease detection from resting-state EEG required a rigorous feature pipeline and model comparison on a small clinical cohort, with nested cross-validation to avoid overfitting.",
    solution:
      "Developed a classifier on 108 subjects using functional connectivity features from source-reconstructed EEG. Evaluated 5 models with nested 5×2 cross-validation and grid search across feature combinations.",
    impact: [
      "Best model (Extra Trees) reached ROC-AUC 0.96 and 88.9% accuracy",
      "Validated pipeline on 77 PD patients and 31 healthy controls from University of Basel",
    ],
    technologies: [
      "Python",
      "scikit-learn",
      "EEG",
      "Functional Connectivity",
      "Feature Engineering",
      "Cross-Validation",
    ],
  },
];
