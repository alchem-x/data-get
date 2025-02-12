#!/usr/bin/env bash
cd "$(dirname "$0")" || exit 1

pnpm install
pnpm build
cat src/userscript.js > dist/userscript.js
cat dist/main.js >> dist/userscript.js
