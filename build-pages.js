const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const BASE_URL = 'https://umarmalghani07-cpu.github.io/bail-bonds-california-faq-guide';

const pages = [
  'bail-bonds-qa-master',
  'bail-bonds-qa-q4-weekend',
  'bail-bonds-qa-q5-self-bail',
  'bail-bonds-los-angeles-county',
  'bail-bonds-orange-county',
  'bail-bonds-anaheim',
  'bail-bonds-inglewood',
  'bail-bonds-culver-city',
  'how-much-does-a-bail-bond-cost-california',
  'immigration-bail-bonds-california',
  'how-bail-bonds-work-california',
  'dui-bail-bonds-california',
  'what-is-collateral-bail-bond-california',
  'own-recognizance-release-california',
  'what-happens-if-you-skip-bail-california',
  'bail-reduction-hearing-california',
  'property-bond-california',
  'co-signer-bail-bond-california',
  'online-bail-bonds-california',
  'felony-bail-bonds-california',
  'misdemeanor-bail-bonds-california',
  'california-bail-schedule-explained',
];

function parseFrontMatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: content };
  const meta = {};
  match[1].split('\n').forEach(line => {
    const colon = line.indexOf(':');
    if (colon > 0) {
      meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
    }
  });
  return { meta, body: match[2] };
}

function buildHtml(slug, meta, bodyHtml) {
  const title = meta.title || 'California Bail Bonds Guide';
  const description = meta.description || 'California bail bonds legal education guide.';
  const keywords = meta.keywords || 'bail bonds california';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${description}" />
  <meta name="keywords" content="${keywords}" />
  <title>${title} | California Bail Bonds FAQ Guide</title>
  <link rel="canonical" href="${BASE_URL}/${slug}.html" />
  <link rel="stylesheet" href="styles.css" />
  <style>
    .page-content { max-width: 860px; margin: 0 auto; padding: 6rem 1.5rem 4rem; }
    .page-content h1 { font-size: clamp(1.7rem,4vw,2.4rem); font-weight: 800; color: var(--color-primary); margin-bottom: .5rem; line-height: 1.2; }
    .page-content h2 { font-size: 1.3rem; font-weight: 700; color: var(--color-primary); margin: 2rem 0 .75rem; padding-top: .5rem; border-top: 2px solid var(--color-border); }
    .page-content h3 { font-size: 1.05rem; font-weight: 700; color: var(--color-text); margin: 1.5rem 0 .5rem; }
    .page-content p { margin-bottom: 1rem; line-height: 1.75; color: var(--color-text); }
    .page-content a { color: var(--color-accent); text-decoration: underline; }
    .page-content a:hover { color: var(--color-primary); }
    .page-content ul, .page-content ol { margin: .75rem 0 1rem 1.5rem; }
    .page-content li { margin-bottom: .4rem; line-height: 1.65; }
    .page-content table { width: 100%; border-collapse: collapse; margin: 1.25rem 0; font-size: .9rem; }
    .page-content th { background: var(--color-primary); color: #fff; padding: .6rem .85rem; text-align: left; }
    .page-content td { padding: .55rem .85rem; border-bottom: 1px solid var(--color-border); }
    .page-content tr:nth-child(even) td { background: #f4f6fa; }
    .page-content blockquote { border-left: 4px solid var(--color-accent); padding: .75rem 1.25rem; margin: 1.25rem 0; background: #fffbf3; color: var(--color-text-muted); border-radius: 0 4px 4px 0; }
    .page-content hr { border: none; border-top: 1px solid var(--color-border); margin: 2rem 0; }
    .breadcrumb { font-size: .82rem; color: var(--color-text-muted); margin-bottom: 1.5rem; }
    .breadcrumb a { color: var(--color-accent); text-decoration: none; }
    .page-meta { font-size: .82rem; color: var(--color-text-muted); margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid var(--color-border); }
    @media(max-width:640px){ .page-content { padding: 5rem 1rem 3rem; } }
  </style>
</head>
<body>
  <div id="progress-bar"></div>
  <button id="scroll-top" aria-label="Scroll to top">&#8679;</button>

  <nav id="navbar">
    <div class="nav-container">
      <a href="index.html" class="nav-logo">CA Bail Bonds Guide</a>
      <ul class="nav-links">
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li><a href="index.html#guides" class="nav-link">Guides</a></li>
        <li><a href="index.html#legal" class="nav-link">Legal Sources</a></li>
        <li><a href="index.html#contact" class="nav-link">Contact</a></li>
      </ul>
      <button class="nav-toggle" aria-label="Toggle menu">&#9776;</button>
    </div>
  </nav>

  <main class="page-content">
    <div class="breadcrumb">
      <a href="index.html">Home</a> &rsaquo; ${title}
    </div>
    <div class="page-meta">California Bail Bonds FAQ Guide &mdash; Updated 2026 &mdash; For informational purposes only</div>
    ${bodyHtml}
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <strong>California Bail Bonds Guide</strong>
          <p>Free public legal education — 2026</p>
          <p>Covering all 58 California counties</p>
        </div>
        <div class="footer-links">
          <strong>Main Guides</strong>
          <a href="bail-bonds-qa-master.html">Master Q&amp;A — 12 Questions</a>
          <a href="how-bail-bonds-work-california.html">How Bail Bonds Work</a>
          <a href="bail-bonds-qa-q4-weekend.html">Weekend Bail Guide</a>
          <a href="bail-bonds-qa-q5-self-bail.html">Self-Bail Guide</a>
          <a href="california-bail-schedule-explained.html">CA Bail Schedule Explained</a>
        </div>
        <div class="footer-links">
          <strong>County Guides</strong>
          <a href="bail-bonds-los-angeles-county.html">Los Angeles County</a>
          <a href="bail-bonds-orange-county.html">Orange County</a>
          <a href="bail-bonds-anaheim.html">Anaheim</a>
          <a href="bail-bonds-inglewood.html">Inglewood</a>
          <a href="bail-bonds-culver-city.html">Culver City</a>
        </div>
        <div class="footer-links">
          <strong>Topic Guides</strong>
          <a href="how-much-does-a-bail-bond-cost-california.html">Bail Bond Cost</a>
          <a href="dui-bail-bonds-california.html">DUI Bail Bonds</a>
          <a href="immigration-bail-bonds-california.html">Immigration Bonds</a>
          <a href="felony-bail-bonds-california.html">Felony Bail Bonds</a>
          <a href="misdemeanor-bail-bonds-california.html">Misdemeanor Bail Bonds</a>
          <a href="online-bail-bonds-california.html">Online Bail Bonds</a>
          <a href="co-signer-bail-bond-california.html">Co-Signer Guide</a>
          <a href="what-is-collateral-bail-bond-california.html">Collateral Explained</a>
          <a href="bail-reduction-hearing-california.html">Bail Reduction Hearing</a>
          <a href="what-happens-if-you-skip-bail-california.html">If You Skip Bail</a>
          <a href="own-recognizance-release-california.html">OR Release</a>
          <a href="property-bond-california.html">Property Bond</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 California Bail Bonds FAQ Guide. For informational purposes only. Not legal advice.</p>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;
}

let sitemapUrls = [
  `  <url>\n    <loc>${BASE_URL}/index.html</loc>\n    <lastmod>2026-05-17</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>`
];

pages.forEach(slug => {
  const mdPath = path.join(__dirname, `${slug}.md`);
  if (!fs.existsSync(mdPath)) {
    console.warn(`SKIP (not found): ${slug}.md`);
    return;
  }

  const raw = fs.readFileSync(mdPath, 'utf8');
  const { meta, body } = parseFrontMatter(raw);

  // Fix internal cross-links: /slug/ -> slug.html
  let bodyMd = body;
  pages.forEach(s => {
    bodyMd = bodyMd.replace(new RegExp(`\\(/${s}/\\)`, 'g'), `(${s}.html)`);
    bodyMd = bodyMd.replace(new RegExp(`\\(\\.\\./${s}/\\)`, 'g'), `(${s}.html)`);
  });

  const bodyHtml = marked(bodyMd);
  const html = buildHtml(slug, meta, bodyHtml);

  fs.writeFileSync(path.join(__dirname, `${slug}.html`), html, 'utf8');
  console.log(`Built: ${slug}.html`);

  sitemapUrls.push(
    `  <url>\n    <loc>${BASE_URL}/${slug}.html</loc>\n    <lastmod>2026-05-17</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`
  );
});

// Yoast-style sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!-- XML Sitemap generated by California Bail Bonds FAQ Guide -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${sitemapUrls.join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap, 'utf8');
console.log(`\nBuilt sitemap.xml with ${sitemapUrls.length} URLs`);
console.log('Done.');
