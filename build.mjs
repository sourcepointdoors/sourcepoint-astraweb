import { transform } from 'esbuild';
import { mkdir, writeFile, readFile, cp, rm } from 'node:fs/promises';
import { createPages } from './src/pages.mjs';
import { shell } from './src/layout.mjs';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('public', 'dist', { recursive: true });
// Compact only whitespace; preserve identifiers, syntax, and CSS rule order.
for (const asset of ['styles.css', 'element.css', 'warranty.css', 'site.js', 'element.js']) {
  const loader = asset.endsWith('.css') ? 'css' : 'js';
  const source = await readFile('public/' + asset, 'utf8');
  const { code } = await transform(source, {
    loader,
    minifyWhitespace: true,
    minifySyntax: false,
    minifyIdentifiers: false,
    legalComments: 'none',
    charset: 'utf8',
    target: 'esnext',
  });
  await writeFile('dist/' + asset, code);
}

const pages = createPages();
for (const [path, [title, body, assets]] of pages) {
  const file = path.endsWith('.html') ? 'dist' + path : 'dist' + path + 'index.html';
  await mkdir(file.slice(0, file.lastIndexOf('/')), { recursive: true });
  await writeFile(file, shell(title, body, assets));
}
await writeFile('dist/robots.txt', 'User-agent: *\nDisallow: /\n');
console.log(`Built ${pages.size} pages. Draft remains noindex until launch review.`);
