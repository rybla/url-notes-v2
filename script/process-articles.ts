import { generateSummary, generateTags, getMarkdownContent } from "@/article";
import { cacheText } from "@/cache";
import { Article } from "@/ontology";
import * as fs from "fs/promises";
import path from "path";

// -----------------------------------------------------------------------------

const dirpath_articles = "output-1/article";
const filenames_articles = await fs.readdir(dirpath_articles);
for (const filename_article of filenames_articles) {
  // remove json extension from filename_article
  const id = path.basename(filename_article, ".json");
  console.log(`processing article: ${id}`);

  const filepath_article = path.join(dirpath_articles, filename_article);
  const article = Article.parse(await Bun.file(filepath_article).json());

  const content = await cacheText(
    `output-2/article_content/${id}.md`,
    async () => await getMarkdownContent(article),
  );

  const summary = await cacheText(
    `output-2/article_summary/${id}.md`,
    async () => await generateSummary(content),
  );

  const tags = await cacheText(
    `output-2/article_tags/${id}.csv`,
    async () => await generateTags(article.title, summary),
  );
}

// -----------------------------------------------------------------------------

process.exit(0);
