import { link, button, cta, seriesCards, productImage } from '../components.mjs';
import { series } from '../catalog.mjs';

export function registerHome(pages) {
  pages.set('/', [
    'Premium doors & windows for the trade',
    `<section class="hero"><div class="hero-copy"><span class="eyebrow">SourcePoint / Doors & windows</span><h1>Exceptional openings.<br><em>Built for the trade.</em></h1><p>Six distinctive collections. One source for premium doors and windows.</p><div class="hero-actions">${button('/catalog/', 'Explore the collections')}${link('/become-a-dealer/', 'Partner with SourcePoint', 'text-link')}</div><div class="hero-note"><span class="mono">06</span><span>Product series.<br>A considered collection.</span></div></div><figure class="hero-image"><span class="eyebrow">Featured / Chateau</span><img src="/assets/chateau.jpg" alt="Chateau Steel French arch-top double door" width="1600" height="1600" fetchpriority="high"><figcaption><span>Steel French.<br><strong>A new perspective on the entrance.</strong></span>${link('/series/chateau/', 'Explore Chateau ↗')}</figcaption></figure></section><section class="statement"><span class="eyebrow">Your source for doors and windows</span><p>Architectural character.<br>Trade-focused supply.</p><div>From statement entrances to wide-open living spaces, SourcePoint brings a focused collection of doors and windows to dealers and distributors.</div></section><section class="section"><div class="section-heading"><div><span class="eyebrow">In focus</span><h2>Three ways to<br>make an entrance.</h2></div><p>Steel. Aluminum. Mahogany.<br>Distinct materials, lasting impressions.</p></div><div class="featured-grid">${[
      'chateau',
      'element',
      'heritage',
    ]
      .map((id) => {
        const s = series.find((x) => x.id === id);
        return `<article class="featured"><a class="product-image" href="/series/${id}/">${productImage(s)}</a><div class="featured-info"><span class="eyebrow">${s.material}</span><h3>${link('/series/' + id + '/', s.name + ' <span aria-hidden="true">↗</span>')}</h3><p>${s.product}</p></div></article>`;
      })
      .join(
        '',
      )}</div></section><section class="section collections"><div class="section-heading"><div><span class="eyebrow">The SourcePoint collection</span><h2>Six series.<br>Every opening considered.</h2></div>${link('/catalog/', 'View all collections ↗', 'text-link')}</div>${seriesCards()}</section><section class="trade-panel"><span class="eyebrow">A relationship built around the trade</span><h2>Your next project.<br>Our shared focus.</h2><div class="trade-columns"><p>Explore the right series for your customers, review product details, and connect with the SourcePoint team.</p><div>${link('/resources/', 'Product resources ↗')}${link('/company-story/', 'Our company story ↗')}${link('/find-a-dealer/', 'Find a dealer ↗')}</div></div></section>${cta()}`,
  ]);
}
