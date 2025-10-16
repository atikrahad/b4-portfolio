const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('site-header');
const headerNav = header ? header.querySelector('nav') : null;
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');

    if (targetId && targetId.startsWith('#')) {
      event.preventDefault();
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    if (menu && !menu.classList.contains('hidden') && window.innerWidth < 1024) {
      menu.classList.add('hidden');
    }
  });
});

const applyHeaderStyles = () => {
  if (!header) return;

  const scrolledClasses = ['bg-black/80', 'border-white/10', 'backdrop-blur'];
  const restClasses = ['border-transparent'];

  if (window.scrollY > 50) {
    header.classList.add(...scrolledClasses, 'shadow-lg');
    header.classList.remove(...restClasses);

    if (headerNav) {
      headerNav.classList.remove('py-6');
      headerNav.classList.add('py-4');
    }
  } else {
    header.classList.remove(...scrolledClasses, 'shadow-lg');
    header.classList.add(...restClasses);

    if (headerNav) {
      headerNav.classList.add('py-6');
      headerNav.classList.remove('py-4');
    }
  }
};

applyHeaderStyles();
window.addEventListener('scroll', applyHeaderStyles);
