import type { ReactElement } from "react";
import type { Article } from "../models";
import { Link } from "./Link";
import { DateElement } from "./Date";
import { Content } from "./Content";

interface Props {
  articles: Article[];
}

export function App(props: Props): ReactElement {
  return (
    <div>
      {props.articles.map((article) => {
        return (
          <div className="article" key={article.title}>
            <h2>
              <Link url={article.guid ?? null} newTab>
                {article.title ?? "不明なタイトル"}
              </Link>
            </h2>
            <time>
              <DateElement date={article.isoDate ?? null} />
            </time>
            <p>
              <Content content={article.contentSnippet ?? null} />
            </p>
            {/* <pre>{JSON.stringify(article, null, 4)}</pre> */}
          </div>
        );
      })}
    </div>
  );
}
