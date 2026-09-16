import { link, intro, field, form } from '../components.mjs';

export function registerContact(pages) {
  pages.set('/contact/', [
    'Contact',
    intro(
      'Let’s talk',
      'Your next opening<br>starts here.',
      'Tell us about your business or the products you’re exploring.',
    ) +
      `<section class="form-layout"><aside><span class="eyebrow">SourcePoint</span><h2>Atlanta, GA<br>Warehouses</h2><p>For product questions, dealer relationships, and general inquiries.</p><p class="muted">Contact details will be added before launch.</p></aside>${form(field('Name') + field('Company name') + field('Email', 'email') + field('Phone', 'tel'))}</section>`,
  ]);
  pages.set('/find-a-dealer/', [
    'Find a dealer',
    intro(
      'Connect locally',
      'Find your<br>SourcePoint connection.',
      'Share your location and the products you’re interested in.',
    ) +
      `<section class="form-layout"><aside><h2>Start with the right series.</h2><p>Browse our collections while the dealer directory is being prepared.</p>${link('/catalog/', 'Explore all six series ↗', 'text-link')}</aside>${form(field('Name') + field('Company name') + field('Email', 'email') + field('Phone', 'tel') + field('ZIP code', 'text', 'zip'))}</section>`,
  ]);
  pages.set('/become-a-dealer/', [
    'Become a dealer',
    intro(
      'Trade partnerships',
      'Let’s build<br>your next opportunity.',
      'Introduce your business to SourcePoint and explore a dealer relationship.',
    ) +
      `<section class="form-layout"><aside><span class="eyebrow">Built for the trade</span><h2>Six collections.<br>One conversation.</h2><p>Tell us about your business, your customers, and the product series you’re interested in.</p></aside>${form(field('Company name') + field('Business type') + field('Contact name') + field('Email', 'email') + field('Phone', 'tel') + field('City') + field('State') + field('ZIP code', 'text', 'zip'))}</section>`,
  ]);
}
