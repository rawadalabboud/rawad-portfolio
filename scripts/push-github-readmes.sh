#!/usr/bin/env bash
# Push README updates to all personal GitHub repos.
# Requires: gh auth login as rawadalabboud (not work account)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)/_repos-audit"
REPOS=(InternshipM2 tdbrain_dl ftrsgt-online mlops-fake-news bank-nlp-assistant partema-eeg-analysis bank-rag-lbp)

for r in "${REPOS[@]}"; do
  echo "Pushing $r..."
  git -C "$ROOT/$r" push origin HEAD
done

# Profile README (create repo first if needed):
# gh repo create rawadalabboud/rawadalabboud --public --source "$ROOT/profile-readme" --remote origin --push

echo "Done."
