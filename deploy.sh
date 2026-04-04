#!/bin/zsh
# 一键部署：push + build + deploy
export PATH="/Users/Jeremy/.nvm/versions/node/v20.20.0/bin:$PATH"

echo "📤 Pushing to GitHub..."
git push origin main

echo "🔨 Building..."
npm run build

echo "🚀 Deploying to Cloudflare Pages..."
npx wrangler pages deploy dist --project-name wechat-dashboard --commit-dirty=true

echo "✅ Done! https://www.kkbsz.com"
