import type { Item } from "rss-parser";

export interface Article extends Item {
  feedTitle: string | null;
}
