#!/usr/bin/env bash
# Create and push GitHub profile README repo (rawadalabboud/rawadalabboud).
set -euo pipefail

GH="${GH:-/opt/homebrew/bin/gh}"
ROOT="$(cd "$(dirname "$0")/../.." && pwd)/_repos-audit/profile-readme"
cd "$ROOT"

if [ ! -d .git ]; then
  git init -b main
  git add README.md
  git commit -m "$(cat <<'EOF'
docs: add GitHub profile README

EOF
)"
fi

if "$GH" repo view rawadalabboud/rawadalabboud &>/dev/null; then
  git remote remove origin 2>/dev/null || true
  git remote add origin "https://github.com/rawadalabboud/rawadalabboud.git"
  git push -u origin main
else
  "$GH" repo create rawadalabboud/rawadalabboud --public --source . --remote origin --push
fi

echo "Profile README live at https://github.com/rawadalabboud"
