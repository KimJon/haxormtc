const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const sitemapPath = path.resolve(__dirname, '..', 'public', 'sitemap.xml');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('[GH-PAGES] Error: dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const indexContent = fs.readFileSync(indexPath, 'utf8');

// 1. Copy index.html to 404.html for GitHub Pages fallback
const fallbackPath = path.join(distDir, '404.html');
fs.writeFileSync(fallbackPath, indexContent, 'utf8');
console.log('[GH-PAGES] Created dist/404.html fallback');

// 2. Ensure CNAME exists
const cnamePath = path.join(distDir, 'CNAME');
fs.writeFileSync(cnamePath, 'haxormtc.com\n', 'utf8');
console.log('[GH-PAGES] Created dist/CNAME (haxormtc.com)');

// 3. Ensure .nojekyll exists
const nojekyllPath = path.join(distDir, '.nojekyll');
fs.writeFileSync(nojekyllPath, '# Disable Jekyll processing on GitHub Pages\n', 'utf8');
console.log('[GH-PAGES] Created dist/.nojekyll');

// 4. Extract routes from sitemap.xml
const routes = new Set([
  'agency-partners',
  'services/crm-implementation',
  'services/business-automation',
  'services/integrations',
  'work',
  'about',
  'services',
  'software',
  'kits',
  'solutions/kits',
  'portfolio',
  'calculator',
  'why-us',
  'contact',
  'services/google-family-link',
  'education/family-link',
  'education/google-family-link',
  'services/zoho',
  'software/zoho'
]);

if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const locRegex = /<loc>https:\/\/haxormtc\.com\/([^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    const route = match[1].replace(/^\/+|\/+$/g, '');
    if (route) {
      routes.add(route);
    }
  }
}

// 5. Generate index.html for each route so GitHub Pages returns HTTP 200 OK
let count = 0;
for (const route of routes) {
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  const routeIndexPath = path.join(routeDir, 'index.html');
  fs.writeFileSync(routeIndexPath, indexContent, 'utf8');
  count++;
}

console.log(`[GH-PAGES] Pre-generated ${count} route index.html files for 100% direct URL and SEO support.`);
