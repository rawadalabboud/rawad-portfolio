#!/usr/bin/env bash
# Publish all GitHub README updates + profile README + repo metadata.
# Prerequisite: logged in as rawadalabboud
#   /opt/homebrew/bin/gh auth login
set -euo pipefail

GH="${GH:-/opt/homebrew/bin/gh}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PORTFOLIO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
AUDIT_DIR="$(cd "$PORTFOLIO_DIR/.." && pwd)/_repos-audit"

USER="$("$GH" api user --jq .login)"
if [ "$USER" != "rawadalabboud" ]; then
  echo "Error: gh is logged in as '$USER', not 'rawadalabboud'."
  echo "Run: gh auth login"
  exit 1
fi

echo "==> Pushing README updates..."
REPOS=(InternshipM2 tdbrain_dl ftrsgt-online mlops-fake-news bank-nlp-assistant partema-eeg-analysis bank-rag-lbp)
for r in "${REPOS[@]}"; do
  echo "  $r"
  git -C "$AUDIT_DIR/$r" remote set-url origin "https://github.com/rawadalabboud/${r}.git"
  git -C "$AUDIT_DIR/$r" push origin HEAD
done

echo "==> Profile README..."
bash "$SCRIPT_DIR/push-profile-readme.sh"

echo "==> Repo descriptions + topics..."
bash "$SCRIPT_DIR/sync-github-meta.sh"

echo "==> Portfolio (open-source section)..."
cd "$PORTFOLIO_DIR"
git add README.md src/data/openSource.ts src/components/OpenSource.tsx src/pages/HomePage.tsx src/data/nav.ts src/hooks/useActiveSection.ts scripts/
git status --short
if git diff --cached --quiet; then
  echo "  (no portfolio changes to commit)"
else
  git commit -m "$(cat <<'EOF'
feat: open-source section synced with GitHub repos

Add On GitHub section, nav link, and publish scripts for README sync.
EOF
)"
  git push origin HEAD
fi

echo ""
echo "All done. Check https://github.com/rawadalabboud"
