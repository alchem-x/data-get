#!/usr/bin/env bash
cd "$(dirname "$0")" || exit 1

pnpm install
pnpm build
cat src/userscript.js > dist/userscript.js
cat dist/main.js >> dist/userscript.js

git checkout -b gh-pages
mv dist docs
git add -f docs
git commit -m "Generate pages: $(date '+%Y-%m-%dT%H:%M:%S%z')"
git push -fu origin gh-pages
git checkout main
git branch -D gh-pages
