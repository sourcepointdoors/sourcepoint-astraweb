import { registerHome } from './pages/home.mjs';
import { registerCollections } from './pages/collections.mjs';
import { registerCompany } from './pages/company.mjs';
import { registerResources } from './pages/resources.mjs';
import { registerContact } from './pages/contact.mjs';
import { registerNotFound } from './pages/not-found.mjs';
import { warrantyPage } from './warranty.mjs';

export function createPages() {
  const pages = new Map();
  registerHome(pages);
  registerCollections(pages);
  registerCompany(pages);
  registerResources(pages);
  pages.set('/warranty/', ['Warranty & care', warrantyPage(), { styles: ['/warranty.css'] }]);
  registerContact(pages);
  registerNotFound(pages);
  return pages;
}
