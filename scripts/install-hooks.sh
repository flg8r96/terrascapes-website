#!/bin/sh
# Install repo git hooks (not versioned in .git). Run once after clone, and after this script
# changes. Installs the pre-push GATE that blocks un-approved direct pushes to main.
DIR="$(cd "$(dirname "$0")/.." && pwd)"
cp "$DIR/scripts/hooks/pre-push" "$DIR/.git/hooks/pre-push"
chmod +x "$DIR/.git/hooks/pre-push"
echo "Installed pre-push gate hook -> $DIR/.git/hooks/pre-push"
