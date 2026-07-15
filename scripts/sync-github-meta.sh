#!/usr/bin/env bash
# Set GitHub repo descriptions and topics (personal account rawadalabboud).
# Run after: gh auth login --hostname github.com  (as rawadalabboud)
set -euo pipefail

OWNER=rawadalabboud
GH="${GH:-/opt/homebrew/bin/gh}"

"$GH" repo edit "$OWNER/rawad-portfolio" \
  --description "Personal portfolio — ML/AI engineer, voice AI, RAG, predictive ML (React + Vite)" \
  --add-topic portfolio --add-topic machine-learning --add-topic genai --add-topic react

"$GH" repo edit "$OWNER/partema-eeg-analysis" \
  --description "EEG, voice, and questionnaire pipelines for PARTEMA rTMS depression research" \
  --add-topic eeg --add-topic neuroscience --add-topic python --add-topic mne

"$GH" repo edit "$OWNER/bank-rag-lbp" \
  --description "French banking RAG chatbot — FAISS retrieval, cited answers, 63-case eval suite" \
  --add-topic rag --add-topic fastapi --add-topic faiss --add-topic nlp

"$GH" repo edit "$OWNER/bank-nlp-assistant" \
  --description "Banking intent classification + FAISS RAG + cross-encoder reranking (FastAPI, Streamlit)" \
  --add-topic nlp --add-topic rag --add-topic transformers --add-topic fastapi

"$GH" repo edit "$OWNER/mlops-fake-news" \
  --description "Fake news classifier API — FastAPI, Docker, CI/CD, deployed on Render" \
  --add-topic mlops --add-topic fastapi --add-topic docker --add-topic scikit-learn

"$GH" repo edit "$OWNER/InternshipM2" \
  --description "Parkinson's disease detection from EEG using ML (M2 internship)" \
  --add-topic eeg --add-topic machine-learning --add-topic parkinsons

"$GH" repo edit "$OWNER/ftrsgt-online" \
  --description "Online finger-tapping random sequence generation task (jsPsych)" \
  --add-topic neuroscience --add-topic javascript --add-topic jspsych

"$GH" repo edit "$OWNER/tdbrain_dl" \
  --description "ResNet-50 feature extraction for TDBrain neuroimaging (PyTorch, SLURM)" \
  --add-topic deep-learning --add-topic pytorch --add-topic neuroimaging

echo "Descriptions and topics updated."
