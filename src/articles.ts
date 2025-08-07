import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";
import TurndownService from "turndown";
import type { Article } from "./types";
import * as ai from "./ai";

/**
 * Extracts an article from the HTML page at a given URL.
 *
 * @param url The URL of an HTML page.
 * @returns The {@link Article} extracted from the HTML page. If there was any error, returns null instead.
 */
export async function url_to_article(url: string): Promise<Article | null> {
  try {
    const html = await (await Bun.fetch(url)).text();
    const doc = new JSDOM(html, { url });
    const reader = new Readability(doc.window.document);
    return reader.parse();
  } catch {
    return null;
  }
}

/**
 * Transforms an article into a Markdown document.
 *
 * @param article The article to transform.
 * @returns The Markdown document as a string that corresponds to the input article.
 */
export async function article_to_markdown(article: Article): Promise<string> {
  const turndownService = new TurndownService({ headingStyle: "atx" });
  let markdownString = "";
  const metadata: string[] = [];

  if (article.title) {
    metadata.push(`title: "${article.title.replace(/"/g, '\\"')}"`);
  }
  if (article.byline) {
    metadata.push(`byline: "${article.byline.replace(/"/g, '\\"')}"`);
  }
  if (article.siteName) {
    metadata.push(`siteName: "${article.siteName.replace(/"/g, '\\"')}"`);
  }
  if (article.publishedTime) {
    metadata.push(`publishedTime: "${article.publishedTime}"`);
  }
  if (article.lang) {
    metadata.push(`lang: "${article.lang}"`);
  }

  if (metadata.length > 0) {
    markdownString += `---\n${metadata.join("\n")}\n---\n\n`;
  }

  if (article.title) {
    markdownString += `# ${article.title}\n\n`;
  }

  if (article.content) {
    markdownString += turndownService.turndown(article.content);
  } else if (article.textContent) {
    markdownString += article.textContent;
  }

  return markdownString.trim();
}

export async function generate_summary(content: string): Promise<string> {
  return await ai.gemini(`
Write a very concise and technical bullet-point overview of the following article. Respond with JUST the overview.

${content}
`);
}

export async function generate_tags_for_summary(
  title: string,
  summary: string,
): Promise<string> {
  return await ai.gemini(`
Consider the following article summary. Your task is to come up with the tags that best categorize the content. You may use as many tags as you want. Respond with JUST the comma-separated list of tags.

Summary of "${title}":

${summary}
`);
}
