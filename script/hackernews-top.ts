import {
  getMarkdownContent,
  generateSummary,
  generateTags,
  fetchArticle,
} from "@/article";
import { cacheJson, cacheText } from "@/cache";
import { Client } from "@/hackernews";
import { log, error } from "@/console";
import filenamifyUrl from "filenamify-url";

// -----------------------------------------------------------------------------

const config = {
  "number of stories to fetch": 20,
};

// -----------------------------------------------------------------------------

log(`[hackernews-top] begin`);

const client = new Client();
const stories = await client.get_top_stories(
  config["number of stories to fetch"],
);
for (const story of stories) {
  const url = story.url;
  if (!url) continue;

  log(`[hackernews-top] processing url: ${url}`);

  try {
    const article = await cacheJson(
      `output-1/article/${filenamifyUrl(url)}.json`,
      async () => await fetchArticle(url),
    );
    if (!article) continue;
    const content = await cacheText(
      `output-2/article_content/${filenamifyUrl(url)}.md`,
      async () => await getMarkdownContent(article),
    );
    const summary = await cacheText(
      `output-2/article_summary/${filenamifyUrl(url)}.md`,
      async () => await generateSummary(content),
    );
    const tags = await cacheText(
      `output-2/article_tags/${filenamifyUrl(url)}.md`,
      async () => await generateTags(article.title ?? url, summary),
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      error(e.toString());
    } else {
      log("[hackernews-top] unrecognized exception:", e);
    }
  }
}

log(`[hackernews-top] end`);

// -----------------------------------------------------------------------------

process.exit(0);
