import Markdown from "react-markdown";
import { getArticleInfos } from "./compile" with { type: "macro" };

import "./App.css";

const articles = await getArticleInfos();

export default function App() {
  return (
    <div className="app">
      <div>All Articles</div>
      <div className="article-card-list">
        {articles.map((x, i) => (
          <div key={i} className="article-card">
            <div className="article-card-id">{x.id}</div>
            <div className="article-card-title">
              {x.article.title ?? "Untitled"}
            </div>
            <div className="article-card-tags">{x.tags}</div>
            <div className="article-card-summary">
              <Markdown>{x.summary}</Markdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
