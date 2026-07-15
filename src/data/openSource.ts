export type OpenSourceRepo = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  language: string;
};

export const openSourceRepos: OpenSourceRepo[] = [
  {
    id: "partema-eeg-analysis",
    title: "PARTEMA EEG Analysis",
    description:
      "EEG, voice, and questionnaire pipelines for rTMS depression research (MNE, EEGLAB, TESA).",
    tags: ["Research", "EEG", "Python", "MATLAB"],
    github: "https://github.com/rawadalabboud/partema-eeg-analysis",
    language: "MATLAB / Python",
  },
  {
    id: "bank-rag-lbp",
    title: "Bank RAG (La Banque Postale)",
    description:
      "French banking RAG with FAISS retrieval, cited answers, and a 63-case evaluation suite.",
    tags: ["RAG", "GenAI", "FastAPI"],
    github: "https://github.com/rawadalabboud/bank-rag-lbp",
    language: "Python",
  },
  {
    id: "bank-nlp-assistant",
    title: "Bank NLP Assistant",
    description:
      "Intent classification (DistilBERT) + FAISS RAG + cross-encoder reranking. FastAPI + Streamlit.",
    tags: ["NLP", "RAG", "Transformers"],
    github: "https://github.com/rawadalabboud/bank-nlp-assistant",
    language: "Python",
  },
  {
    id: "mlops-fake-news",
    title: "Fake News Classifier API",
    description:
      "TF-IDF + logistic regression served with FastAPI, Docker, CI, and Render deployment.",
    tags: ["MLOps", "FastAPI", "Docker"],
    github: "https://github.com/rawadalabboud/mlops-fake-news",
    demo: "https://mlops-fake-news.onrender.com",
    language: "Python",
  },
  {
    id: "InternshipM2",
    title: "Parkinson's Detection from EEG",
    description:
      "M2 internship: spectral and connectivity features with classical ML on 108 subjects.",
    tags: ["Research", "EEG", "ML"],
    github: "https://github.com/rawadalabboud/InternshipM2",
    language: "Jupyter",
  },
  {
    id: "ftrsgt-online",
    title: "FTRSGT Online Task",
    description:
      "Browser-based finger-tapping random sequence generation task (jsPsych + custom plugins).",
    tags: ["Research", "Neuropsych", "JavaScript"],
    github: "https://github.com/rawadalabboud/ftrsgt-online",
    language: "JavaScript",
  },
  {
    id: "tdbrain_dl",
    title: "TDBrain Feature Extraction",
    description:
      "ResNet-50 batch feature extraction for TDBrain neuroimaging tensors on SLURM clusters.",
    tags: ["Research", "Deep Learning", "PyTorch"],
    github: "https://github.com/rawadalabboud/tdbrain_dl",
    language: "Python",
  },
];
