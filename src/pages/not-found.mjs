import { button, intro } from '../components.mjs';

export function registerNotFound(pages) {
  pages.set('/404.html', [
    'Page not found',
    intro(
      '404',
      'This opening<br>leads elsewhere.',
      'The page you’re looking for could not be found.',
    ) + `<section class="section">${button('/', 'Return home')}</section>`,
  ]);
}
