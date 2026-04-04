#!/bin/zsh
# 通用部署脚本：push + build + deploy
set -euo pipefail

PROJECT_NAME="${CLOUDFLARE_PAGES_PROJECT:-}"
if [ -z "$PROJECT_NAME" ]; then
  echo "Set CLOUDFLARE_PAGES_PROJECT to your Cloudflare Pages project name."
  exit 1
fi

BRANCH="$(git branch --show-current)"
if [ -z "$BRANCH" ]; then
  echo "Unable to detect the current git branch."
  exit 1
fi

echo "📤 Pushing to GitHub..."
git push origin "$BRANCH"

echo "🔨 Building..."
npm run build

echo "🚀 Deploying to Cloudflare Pages..."
npx wrangler pages deploy dist --project-name "$PROJECT_NAME" --commit-dirty=true

echo "✅ Done!"
