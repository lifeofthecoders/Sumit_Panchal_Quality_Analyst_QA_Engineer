import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const base = process.env.PAGES_BASE || './';

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

fs.copyFileSync(path.join(root, 'index.html'), path.join(dist, 'index.html'));
fs.cpSync(path.join(root, 'src'), path.join(dist, 'src'), { recursive: true });
fs.cpSync(path.join(root, 'public'), dist, { recursive: true });

let html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
html = html.replaceAll('href="./favicon.svg?v=3"', `href="${base}favicon.svg?v=3"`);
html = html.replaceAll('href="./src/styles.css"', `href="${base}src/styles.css"`);
html = html.replaceAll('src="./src/app.js"', `src="${base}src/app.js"`);
fs.writeFileSync(path.join(dist, 'index.html'), html);

console.log(`Static production build created in dist/ (base: ${base})`);
