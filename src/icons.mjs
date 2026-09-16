const paths = {
  external: 'M7 17 17 7M7 7h10v10',
  right: 'M5 12h14m-6-6 6 6-6 6',
  down: 'M12 5v14m-6-6 6 6 6-6',
  chevron: 'm6 9 6 6 6-6',
};

export const icon = (name) =>
  `<svg class="link-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="${paths[name]}"></path></svg>`;
