import {
  fetchArticle
} from "@/article";
import { cacheJson } from "@/cache";
import { error, log } from "@/console";
import { fetchFeed } from "@/feed";
import { RssFeedConfig, type Article } from "@/ontology";
import paths from "@/paths";
import filenamifyUrl from "filenamify-url";

// -----------------------------------------------------------------------------

const feeds = await Promise.all(
  (await paths.get_filepaths_of_feeds()).map(
    async (filepath_feed) =>
      await fetchFeed(
        RssFeedConfig.parse(await Bun.file(filepath_feed).json()),
      ),
  ),
);
// log(show({ feeds }));

for (const feed of feeds) {
  log(`fetching articles from feed: ${feed.config.name}`);
  for (const item of feed.rss.items.slice(0, feed.config.maxItems)) {
    try {
      const url = item.link;
      if (!url) continue;

      log(`fetching article at url: ${url}`);

      const article = await cacheJson(
        paths.filepath_article(filenamifyUrl(url)),
        async () => {
          const article: Article | null = await fetchArticle(url);
          if (!article) return null;
          // fill in some extra info from the feed item
          article.title = article.title ?? item.title ?? url;
          article.summary =
            item.summary ?? article.excerpt ?? item.contentSnippet;
          article.tags = article.tags ?? item.categories ?? [];
          article.publishedTime = article.publishedTime ?? item.pubDate;
          return article;
        },
      );
      if (!article) continue;
    } catch (e: unknown) {
      if (e instanceof Error) {
        error(e.toString());
      } else {
        log("[unrecognized exception]", e);
      }
    }
  }
}

// -----------------------------------------------------------------------------

process.exit(0);
