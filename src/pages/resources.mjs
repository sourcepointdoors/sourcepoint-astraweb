import { icon } from '../icons.mjs';
import { masterWarranty } from '../warranty-data.mjs';
import { intro } from '../components.mjs';

export function registerResources(pages) {
  pages.set('/resources/', [
    'Resources',
    intro(
      'Product support',
      'Details that<br>move projects forward.',
      'Find product specifications, installation guidance, and warranty information.',
    ) +
      `<section class="section"><div class="resource-list"><a href="${masterWarranty.url}" target="_blank" rel="noopener"><h2>${masterWarranty.title}</h2><p>${masterWarranty.metadata}</p><span>View Master Warranty PDF ${icon('external')}</span></a>${[
        ['Product specifications', 'Product dimensions and technical details.'],
        ['Installation guides', 'Product-specific installation documentation.'],
        ['Catalogs & literature', 'Explore the SourcePoint collection.'],
      ]
        .map(
          ([a, b]) =>
            `<div><h2>${a}</h2><p>${b}</p><span class="status">Documents coming soon</span></div>`,
        )
        .join(
          '',
        )}<a href="/warranty/"><h2>Warranty & care</h2><p>Warranty and care resources organized by series.</p><span>Browse warranty library ${icon('external')}</span></a></div></section>`,
  ]);
}
