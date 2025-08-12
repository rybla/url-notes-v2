import path from "path";
import * as fs from "fs";
import { log } from "@/console";

const dirpath_feed = path.join("input", "feed");

const dirpath_article = path.join("output-1", "article");
const dirpath_article_content = path.join("output-2", "article_content");
const dirpath_article_summary = path.join("output-2", "article_summary");
const dirpath_article_tags = path.join("output-2", "article_tags");

export const paths = {
  // feed
  dirpath_feed,
  get_filepaths_of_feeds(): string[] {
    return fs
      .readdirSync(dirpath_feed, {
        encoding: "utf8",
        recursive: false,
      })
      .flatMap((fn) =>
        fn.endsWith(".feed.json") ? [path.join(dirpath_feed, fn)] : [],
      );
  },

  // article
  dirpath_article,
  dirpath_article_content,
  dirpath_article_summary,
  dirpath_article_tags,
  get_ids_of_articles(): string[] {
    log("[get_ids_of_articles]");
    return fs
      .readdirSync(dirpath_article, {
        encoding: "utf8",
        recursive: false,
      })
      .flatMap((fn) =>
        fn.endsWith(".json") ? [path.basename(fn, ".json")] : [],
      );
  },
  filepath_article(id_article: string) {
    return path.join(dirpath_article, `${id_article}.json`);
  },
  filepath_article_content(id_article: string) {
    return path.join(dirpath_article_content, `${id_article}.md`);
  },
  filepath_article_summary(id_article: string) {
    return path.join(dirpath_article_summary, `${id_article}.md`);
  },
  filepath_article_tags(id_article: string) {
    return path.join(dirpath_article_tags, `${id_article}.csv`);
  },
};

export default paths;
