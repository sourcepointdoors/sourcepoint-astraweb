import { series } from './catalog.mjs';

export const link = (url, text, cls = '') => `<a class="${cls}" href="${url}">${text}</a>`;

export const button = (url, text) =>
  link(url, text + ' <span aria-hidden="true">↗</span>', 'button');

export const intro = (label, title, copy) =>
  `<section class="page-intro"><span class="eyebrow">${label}</span><h1>${title}</h1><p>${copy}</p></section>`;

export const cta = () =>
  `<section class="cta"><div><span class="eyebrow">Build with SourcePoint</span><h2>A better opening<br>starts with a conversation.</h2></div>${button('/become-a-dealer/', 'Become a dealer')}</section>`;

export const seriesCards = () =>
  `<div class="series-grid">${series.map((s, i) => `<a class="series-card" href="/series/${s.id}/"><span class="mono">0${i + 1} / ${s.id.toUpperCase()}</span><h3>${s.name}</h3><p>${s.material}</p><span class="card-end">Explore the series <span aria-hidden="true">↗</span></span></a>`).join('')}</div>`;

export const productImage = (s, cls = '') =>
  `<img class="${cls}" src="/assets/${s.image}" alt="${s.name} ${s.product}" loading="lazy" width="800" height="800">`;

export const field = (label, type = 'text', name = '', wide = false) =>
  `<label class="${wide ? 'wide' : ''}">${label}<input type="${type}" name="${name || label.toLowerCase().replaceAll(' ', '_')}" ${type === 'email' ? 'autocomplete="email"' : ''}></label>`;

export const form = (fields) =>
  `<form class="draft-form"><div class="notice wide">Preview only. Online submissions are not enabled yet.</div>${fields}<label class="wide">How can we help?<textarea name="comment" rows="4"></textarea></label><button class="button" disabled>Submission coming soon</button></form>`;
