const fs = require("fs");

const base = "https://nomadlifexp.com";
const pages = require("../data/posts.json");

const urls = pages.map(p => `
  <url>
    <loc>${base + p.loc}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <priority>${p.priority}</priority>
  </url>
`).join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync("sitemap.xml", sitemap);
console.log("Auto sitemap generated");
