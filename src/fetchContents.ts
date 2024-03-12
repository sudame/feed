import sources from "../sources.json";
import RssParser from "rss-parser";
import type { Article } from "./models";

export async function fetchContents(): Promise<Article[]> {
  const parser = new RssParser<Article>();

  const promises = sources.map(async (source) => await parser.parseURL(source));

  const feeds = await Promise.all(promises);

  const feed = feeds
    .flatMap((feed) => feed.items)
    .toSorted((a, b) => {
      if (a.isoDate === b.isoDate) {
        return 0;
      }
      if (a.isoDate == null) {
        return 1;
      }
      if (b.isoDate == null) {
        return -1;
      }
      const aDate = new Date(a.isoDate);
      const bDate = new Date(b.isoDate);

      return bDate.getTime() - aDate.getTime();
    });

  return feed;
}
