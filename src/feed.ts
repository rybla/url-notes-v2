import RssParser from "rss-parser";
import type { RssFeed, RssFeedConfig } from "./ontology";

export async function fetchFeed(config: RssFeedConfig): Promise<RssFeed> {
  const rssParser = new RssParser();
  return {
    config,
    rss: await rssParser.parseURL(config.feedUrl),
  };
}
