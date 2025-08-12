echo "[$(date "+%Y-%m-%d,%H:%M")] [ui-deploy] begin"

# # generate content
# bun run script/hackernews-top.ts

# build ui
bun run script/ui-build.ts

# deploy to github
git add -A
git commit -m"[ui-deploy]"
git push

echo "[$(date "+%Y-%m-%d,%H:%M")] [ui-deploy] end"
