call pnpm docs:build
cd my-blog/.vitepress/dist

git init
git add -A
git commit -m "auto construct blog"

git push -f https://github.com/huyipu/huyipu.github.io.git master:gh-pages
