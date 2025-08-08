import { log } from "@/console";
import { fetchFeed } from "@/feed";
import { RssFeedConfig } from "@/ontology";
import { show } from "@/utility";

const feed = await fetchFeed(
  RssFeedConfig.parse(
    await Bun.file("input/feed/hackernews-top.feed.json").json(),
  ),
);
log(show({ feed }));
const urls_articles = feed.rss.items.map((item) => item.link);
log(show({ urls_articles }));
