// Handles mobile navigation toggling and active link highlighting.
document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const dropdownToggle = document.querySelector('[data-dropdown-toggle]');
  const dropdownMenu = document.querySelector('[data-dropdown-menu]');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', () => {
      dropdownMenu.classList.toggle('hidden');
    });
  }

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute('href');
    if (!linkPath) return;

    const isActive =
      linkPath === currentPath ||
      (linkPath === 'index.html' && currentPath === '');

    if (isActive) {
      link.classList.add('text-emerald-500');
      link.classList.add('border-emerald-500');
    } else {
      link.classList.remove('text-emerald-500');
      link.classList.remove('border-emerald-500');
    }
  });
});
