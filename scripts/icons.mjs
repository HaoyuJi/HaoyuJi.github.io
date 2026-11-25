const paths = {
  cap: '<path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v5c3 3 9 3 12 0v-5m4-2v7"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
  orcid: '<circle cx="12" cy="12" r="9"/><path d="M8 10v6m3.3-8h1.6a4 4 0 0 1 0 8h-1.6Z"/><circle cx="8" cy="7.5" r=".45" fill="currentColor"/>',
  book: '<path d="M3 4.5c3.2-.7 6-.2 9 2 3-2.2 5.8-2.7 9-2v14c-3.4-.7-6 .1-9 2-3-1.9-5.6-2.7-9-2Zm9 2v14"/>',
  link: '<path d="m10 13 4-4m-6.5 3-1.3 1.3a3.6 3.6 0 0 0 5.1 5.1l2.9-2.9m2.3-3.5 1.3-1.3a3.6 3.6 0 0 0-5.1-5.1L9.8 8.5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  focus: '<path d="M4 9V4h5m6 0h5v5m0 6v5h-5m-6 0H4v-5"/><circle cx="12" cy="12" r="2.5"/>',
  folder: '<path d="M3 7V5h7l2 3h9v11H3Z"/>',
  award: '<circle cx="12" cy="9" r="5"/><path d="m8.5 13-2 8 5.5-3 5.5 3-2-8"/>',
  patent: '<path d="M6 3h9l4 4v14H6Zm8 0v5h5M9 12h7m-7 4h5"/>',
  mic: '<rect x="9" y="2.5" width="6" height="12" rx="3"/><path d="M5.5 11v1a6.5 6.5 0 0 0 13 0v-1M12 19v3m-4 0h8"/>',
  service: '<circle cx="9" cy="8" r="3"/><path d="M3 19c0-6 12-6 12 0m0-14a3 3 0 0 1 0 6m2 4c3 0 4 2 4 4"/>',
  plus: '<path d="M5 12h14m-7-7v14"/>',
  file: '<path d="M6 3h8l4 4v14H6Zm8 0v5h4M9 12h6m-6 4h6"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  cite: '<path d="M4 15c0-4 2-7 6-8v3c-2 1-3 2-3 3h3v5H4Zm10 0c0-4 2-7 6-8v3c-2 1-3 2-3 3h3v5h-6Z"/>',
};
export const icon = name => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
