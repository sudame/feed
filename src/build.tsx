import { renderToStaticMarkup } from "react-dom/server";
import { format } from "prettier";
import fs from "fs/promises";
import { App } from "./view/App";
import { fetchContents } from "./fetchContents";

export async function build(): Promise<void> {
  await fs.rm("dist", { recursive: true, force: true });

  const articles = await fetchContents();

  const html = renderToStaticMarkup(<App articles={articles} />);

  const template = await fs.readFile("src/index.html", "utf-8");
  const rendered = template.replace("{{root}}", html);

  const formatted = await format(rendered, { parser: "html" });

  await fs.mkdir("dist", { recursive: true });
  await fs.writeFile("dist/index.html", formatted);

  process.exit(0);
}
