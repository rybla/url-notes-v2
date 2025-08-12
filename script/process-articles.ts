import { generateSummary, generateTags, getMarkdownContent } from "@/article";
import { cacheText } from "@/cache";
import { Article } from "@/ontology";
import paths from "@/paths";

// -----------------------------------------------------------------------------

const ids_articles = await paths.get_ids_of_articles();
for (const id_article of ids_articles) {
  // remove json extension from filename_article
  console.log(`processing article: ${id_article}`);

  const article = Article.parse(
    await Bun.file(paths.filepath_article(id_article)).json(),
  );

  const content = await cacheText(
    paths.filepath_article_content(id_article),
    async () => await getMarkdownContent(article),
  );

  const summary = await cacheText(
    paths.filepath_article_summary(id_article),
    async () => await generateSummary(content),
  );

  const tags = await cacheText(
    paths.filepath_article_tags(id_article),
    async () => await generateTags(article.title, summary),
  );
}

// -----------------------------------------------------------------------------

process.exit(0);
