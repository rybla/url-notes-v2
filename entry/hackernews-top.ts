import {
  article_to_markdown,
  generate_summary,
  generate_tags_for_summary,
  url_to_article,
} from "@/articles";
import { cacheJson, cacheText } from "@/cache";
import { Client } from "@/hackernews";
import log from "@/log";
import filenamifyUrl from "filenamify-url";

// -----------------------------------------------------------------------------

const config = {
  "number of stories to fetch": 20,
};

// -----------------------------------------------------------------------------

const client = new Client();
const stories = await client.get_top_stories(
  config["number of stories to fetch"],
);
for (const story of stories) {
  const url = story.url;
  if (!url) continue;

  log(`processing url: ${url}`);

  try {
    const article = await cacheJson(
      `output/article/${filenamifyUrl(url)}.md`,
      async () => await url_to_article(url),
    );
    if (!article) continue;
    const content = await cacheText(
      `output/article_content/${filenamifyUrl(url)}.md`,
      async () => await article_to_markdown(article),
    );
    const summary = await cacheText(
      `output/article_summary/${filenamifyUrl(url)}.md`,
      async () => await generate_summary(content),
    );
    const tags = await cacheText(
      `output/article_tags/${filenamifyUrl(url)}.md`,
      async () =>
        await generate_tags_for_summary(article.title ?? url, summary),
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.toString());
    } else {
      log("unrecognized exception:", e);
    }
  }
}

// -----------------------------------------------------------------------------

process.exit(0);
