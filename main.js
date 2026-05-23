document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initTypewriter();
  initScrollAnimations();
});

/* ============================================
   Navigation
   ============================================ */
function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    nav.classList.toggle('nav--scrolled', scrollY > 50);
    lastScroll = scrollY;
  }, { passive: true });

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('active');
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('active');
    });
  });
}

/* ============================================
   Typewriter Effect
   ============================================ */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const lines = [
    'threat-model --target your-app --output mitigations.md',
    'docker scan --severity HIGH,CRITICAL ./Dockerfile',
    'secure-sdlc init --framework owasp-samm',
    'pentest run --scope api --auth oauth2',
    'sast scan --fix-inline ./src/**/*.ts',
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let pauseTimer = null;

  function type() {
    const currentLine = lines[lineIndex];

    if (!isDeleting) {
      el.textContent = currentLine.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentLine.length) {
        pauseTimer = setTimeout(() => {
          isDeleting = true;
          type();
        }, 2200);
        return;
      }
      setTimeout(type, 45 + Math.random() * 35);
    } else {
      el.textContent = currentLine.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
        setTimeout(type, 500);
        return;
      }
      setTimeout(type, 25);
    }
  }

  setTimeout(type, 1000);
}

/* ============================================
   Scroll Animations
   ============================================ */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    '.section__label, .section__title, .section__description, ' +
    '.about__photo, .about__content, .about__stats, ' +
    '.course, .event, .testimonial, .credibility__highlights, ' +
    '.contact__form, .contact__links, .stat'
  );

  animatedElements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

