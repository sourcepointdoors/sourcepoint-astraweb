import { series } from './catalog.mjs';
import { intro } from './components.mjs';
import { masterWarranty, warrantyGroups } from './warranty-data.mjs';

const text = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

function documentLinks(product) {
  if (!product.documents.length)
    return '<p>Warranty — coming soon</p><p>Care guide — coming soon</p>';
  return (
    product.documents
      .map(
        (document) =>
          `<p><a class="text-link" href="${text(document.url)}" target="_blank" rel="noopener">${text(document.label)}</a></p>`,
      )
      .join('') + product.notes.map((note) => `<p>${text(note)}</p>`).join('')
  );
}

function productCard(product) {
  return `<article class="warranty-bubble"><h3>${text(product.name)}</h3>${documentLinks(product)}</article>`;
}

function seriesGroup(collection) {
  const products = warrantyGroups[collection.id];
  if (!products)
    return `<div class="document-row"><h2>${collection.name}</h2><div><span>Warranty — coming soon</span><span>Care guide — coming soon</span></div></div>`;
  return `<details class="warranty-group"><summary><h2>${collection.name}</h2><span class="warranty-count">${products.length} product ${products.length === 1 ? 'type' : 'types'}</span><span class="warranty-chevron" aria-hidden="true">⌄</span></summary><div class="warranty-sublist">${products.map(productCard).join('')}</div></details>`;
}

export function warrantyPage() {
  return (
    intro(
      'Support',
      'Protect the details.',
      'Warranty and care documents for your SourcePoint products.',
    ) +
    `<section class="section"><div class="notice">Read the Master Warranty Terms together with the product-specific Limited Warranty for your product. Where terms differ, the product-specific warranty governs for that product.</div><div class="document-row"><div><h2>${text(masterWarranty.title)}</h2><p>${text(masterWarranty.metadata)}</p></div><div><a href="${text(masterWarranty.url)}" target="_blank" rel="noopener">View PDF ↗</a><a href="${text(masterWarranty.url)}" download>Download PDF ↓</a></div></div>${series.map(seriesGroup).join('')}</section>`
  );
}
