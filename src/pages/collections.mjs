import { button, intro, cta, seriesCards, productImage } from '../components.mjs';
import { series } from '../catalog.mjs';
import { elementPage } from '../element.mjs';
import { mediaUrl } from '../element-media.mjs';

export function registerCollections(pages) {
  pages.set('/catalog/', [
    'Collections',
    intro(
      'The collection',
      'Six series.<br>One SourcePoint.',
      'Explore doors and windows by material and architectural character.',
    ) +
      `<section class="section">${seriesCards()}</section>` +
      cta(),
  ]);
  for (const s of series) {
    if (s.id === 'element') {
      pages.set('/series/element/', [
        'Element aluminum folding doors',
        elementPage(mediaUrl),
        { styles: ['/element.css'], scripts: ['/element.js'] },
      ]);
      continue;
    }
    pages.set('/series/' + s.id + '/', [
      s.name + ' Series',
      intro('The ' + s.name + ' series', s.material, s.description) +
        (s.image
          ? `<section class="series-detail"><div class="detail-image">${productImage(s)}</div><div><span class="eyebrow">Featured design</span><h2>${s.product}</h2><p>${s.description}</p><p>Contact our team to discuss available configurations, dimensions, finishes, and project requirements.</p>${button('/contact/', 'Discuss this collection')}</div></section>`
          : `<section class="section narrow"><h2>Explore ${s.name} with our team.</h2><p>Contact SourcePoint for product details and available configurations.</p>${button('/contact/', 'Ask about ' + s.name)}</section>`) +
        cta(),
    ]);
  }
}
