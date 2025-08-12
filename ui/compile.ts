import { log } from "@/console";
import { readJsonFile, readTextFile } from "@/file";
import { Article } from "@/ontology";
import paths from "@/paths";
import { do_, formatDateTime, fromFormattedDateTime } from "@/utility";

export async function test(): Promise<string> {
  return Promise.resolve(`hello world at ${formatDateTime(new Date())}`);
}

export async function test2(): Promise<string> {
  return Promise.resolve(`hello world at ${formatDateTime(new Date())}`);
}

export type ArticleInfo = {
  id: string;
  article: Article;
  content?: string;
  summary?: string;
  tags?: string[];
};

export async function getArticleInfos(): Promise<ArticleInfo[]> {
  log("[getArticleInfos]");
  const ids_articles = paths.get_ids_of_articles();
  return (
    await Promise.all(
      ids_articles.map(async (id_article) => {
        log(`[getArticleInfos] ${id_article}`);
        const parseResult_article = await readJsonFile(
          paths.filepath_article(id_article),
          Article,
        );
        if (!parseResult_article) return [];
        if (!parseResult_article.data) return [];
        const article: Article = parseResult_article.data;
        const content = await do_(
          async () =>
            (await readTextFile(paths.filepath_article_content(id_article))) ??
            undefined,
        );
        const summary = await do_(
          async () =>
            (await readTextFile(paths.filepath_article_summary(id_article))) ??
            undefined,
        );
        const tags = await do_(async () =>
          (
            (await readTextFile(paths.filepath_article_tags(id_article))) ??
            undefined
          )
            ?.split(",")
            .map((s) => s.trim()),
        );
        const info: ArticleInfo = {
          id: id_article,
          article,
          content,
          summary,
          tags,
        };
        return [info];
      }),
    )
  )
    .flat()
    .toSorted((x, y) => {
      const x_addedTime =
        x.article.addedTime === undefined
          ? undefined
          : fromFormattedDateTime(x.article.addedTime);
      const y_addedTime =
        y.article.addedTime === undefined
          ? undefined
          : fromFormattedDateTime(y.article.addedTime);
      if (x_addedTime !== undefined && y_addedTime !== undefined) {
        return y_addedTime.getTime() - x_addedTime.getTime();
      }
      if (x_addedTime !== undefined) {
        return -1;
      }
      if (y_addedTime !== undefined) {
        return 1;
      }
      return 0;
    });
}
