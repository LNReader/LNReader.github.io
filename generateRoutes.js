import routes from "./routes.json" assert { type: "json" };
import path from "path";
import fs from "fs";

const indexPage = fs.readFileSync("./dist/index.html", "utf-8");
const BASE_URL = "https://lnreader.github.io/";
let siteMapContent = "";
for (const route of routes) {
  const routePage = indexPage
    .replace(/<title>.+<\/title>/, `<title>${route.title}</title>`)
    .replace(
      /(<meta.+description.+content=").+("\s*\/>)/g,
      `$1${route.description}$2`
    );
  const filePath = path.join("./dist", route.path + ".html");
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, routePage, "utf-8");
  siteMapContent += `${BASE_URL}${route.path}\n`;
}
fs.writeFileSync(
  "./dist/404.html",
  indexPage.replace(/<title>.+<\/title>/, `<title>404 | LNReader</title>`),
  "utf-8"
);
fs.writeFileSync("./dist/sitemap.txt", siteMapContent, "utf-8");
