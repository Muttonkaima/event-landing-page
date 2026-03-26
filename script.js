// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

if (window.lucide) {
  window.lucide.createIcons();
}

const body = document.body;
const demoModal = document.querySelector('#demoModal');
const privacyModal = document.querySelector('#privacyModal');
const termsModal = document.querySelector('#termsModal');
const successToast = document.querySelector('#successToast');
const demoForm = document.querySelector('#demoForm');
const submitFrame = document.querySelector('iframe[name="demo-submit-frame"]');
let pendingDemoSubmission = false;

const openModal = (modal) => {
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  body.classList.add('modal-open');
};

const closeModal = (modal) => {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  if (!document.querySelector('.modal-backdrop.open')) {
    body.classList.remove('modal-open');
  }
};

const closeAllModals = () => {
  [demoModal, privacyModal, termsModal].forEach(closeModal);
};

const showToast = () => {
  if (!successToast) return;
  successToast.classList.add('show');
  window.setTimeout(() => successToast.classList.remove('show'), 3200);
};

document.querySelectorAll('.feature-slider').forEach((slider) => {
  const slides = Array.from(slider.querySelectorAll('.slide-card'));
  const dots = Array.from(slider.querySelectorAll('.slider-dot'));
  if (slides.length <= 1) return;

  const render = (index) => {
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      render(index);
    });
  });

  render(0);
});

document.querySelectorAll('.open-demo-modal').forEach((button) => {
  button.addEventListener('click', () => openModal(demoModal));
});

document.querySelectorAll('[data-legal-modal]').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-legal-modal');
    openModal(key === 'privacy' ? privacyModal : termsModal);
  });
});

document.querySelectorAll('[data-close-modal]').forEach((button) => {
  button.addEventListener('click', () => {
    closeModal(button.closest('.modal-backdrop'));
  });
});

document.querySelectorAll('.modal-backdrop').forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeAllModals();
  }
});

demoForm?.addEventListener('submit', () => {
  pendingDemoSubmission = true;
});

submitFrame?.addEventListener('load', () => {
  if (!pendingDemoSubmission) return;
  pendingDemoSubmission = false;
  demoForm?.reset();
  closeModal(demoModal);
  showToast();
});

// Nav background fade on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 2px 20px rgba(13,15,20,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
