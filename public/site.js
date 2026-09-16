(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('nav');
  const navigationLinks = document.querySelectorAll('nav a');
  const forms = document.querySelectorAll('form');

  function toggleMenu() {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('open', open);
  }

  function markCurrentPage() {
    navigationLinks.forEach((link) => {
      if (link.pathname === location.pathname) link.setAttribute('aria-current', 'page');
    });
  }

  function preventDraftSubmission(event) {
    event.preventDefault();
  }

  menuToggle.addEventListener('click', toggleMenu);
  markCurrentPage();
  forms.forEach((form) => form.addEventListener('submit', preventDraftSubmission));
})();
