import { link, intro, cta } from '../components.mjs';

export function registerCompany(pages) {
  pages.set('/company-story/', [
    'Company story',
    intro(
      'Our company',
      'Built around<br>the trade.',
      'SourcePoint Doors and Windows brings premium door and window collections to dealers and distributors.',
    ) +
      `<section class="story-layout"><div class="story-mark"><img src="/assets/mark.svg" alt="" width="240" height="240"></div><div><span class="eyebrow">Our focus</span><h2>Distinctive products.<br>A focused source.</h2><p>Our six series bring together wrought iron, Steel French, aluminum, torrefied mahogany, fiberglass, and uPVC.</p><p>From an individual entrance to a broader product offering, we help trade partners explore the right collection for their customers.</p><p class="eyebrow">Atlanta, GA Warehouses</p>${link('/executive-bios/', 'Meet the leadership team ↗', 'text-link')}</div></section>` +
      cta(),
  ]);
  pages.set('/executive-bios/', [
    'Executive bios',
    intro(
      'Our people',
      'The team<br>behind SourcePoint.',
      'Leadership biographies and portraits will be added to this page.',
    ) +
      `<section class="section narrow"><div class="notice">This draft is awaiting approved executive biographies and photography.</div>${link('/company-story/', 'Explore our company story ↗', 'text-link')}</section>`,
  ]);
}
