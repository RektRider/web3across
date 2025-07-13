// main.js
console.log("JS Loaded");

window.onload = () => {
  console.log("PAGE:", window.location.pathname);
  console.log("Modal style on load:", document.getElementById("form-modal").style.display);
};


// Toggle Menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close menu on scroll (optional)
window.addEventListener('scroll', () => {
  if (navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
});



// Modal Form
function openModal() {
  document.getElementById("form-modal").style.display = "flex";
}
function closeModal() {
  document.getElementById("form-modal").style.display = "none";
}
window.onclick = e => {
  if (e.target === document.getElementById("form-modal")) closeModal();
};

// Form Submit
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      const form = e.target;
      const payload = {
        name: form.name.value,
        project: form.project.value,
        location: form.location.value,
        email: form.email.value,
        services: form.services.value,
        message: form.message.value
      };

      try {
        const res = await fetch('/submit-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const text = await res.text();
        alert(text);
        form.reset();
        closeModal();
      } catch (err) {
        console.error(err);
        alert('Oops, something went wrong.');
      }
    });
  }
});




// Scroll animation for hero section
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.4
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".hero-content, .hero h1, .hero-highlight, .cta-button"
  );
  elements.forEach(el => observer.observe(el));
});


// Media Partners Infinite Loop
document.querySelectorAll('.logo-track').forEach(track => {
  track.innerHTML += track.innerHTML;
});

// Fade‑up scroll animations for Media Partners
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.media-logos .fade-up').forEach(el => {
  fadeObserver.observe(el);
});


document.addEventListener("DOMContentLoaded", () => {


  // About Section Scroll Animation  
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.about-section .section-title, .about-content, .about-grid, .about-card')
      .forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything if browser doesn't support IntersectionObserver
    document.querySelectorAll('.about-section .section-title, .about-content, .about-grid, .about-card')
      .forEach(el => el.classList.add('visible'));
  }
});


// Scroll animation for How We Work cards
const howWorkObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.how-work-card').forEach(card => {
  howWorkObserver.observe(card);
});


// Scroll animation for Services section
const serviceObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.service-card, .services-subtext').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  serviceObserver.observe(el);
});


// Animate Pricing PR Plans Section
// Observer for Pricing Section Title + Subtext
const pricingTextObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const pricingSection = document.querySelector('.pricing-section');
if (pricingSection) pricingTextObserver.observe(pricingSection);

// Observer for Flip Cards (individual card animations)
const flipCardObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

const flipCards = document.querySelectorAll('.pricing-section .flip-card');
flipCards.forEach(card => flipCardObserver.observe(card));


// PR Pricing Card Flip
// Flip card to back (on Learn More button click)
document.querySelectorAll('.flip-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.flip-card');
    card.classList.add('flipped');
  });
});

// Flip card back to front (by clicking anywhere on the back)
document.querySelectorAll('.flip-card-back').forEach(back => {
  back.addEventListener('click', () => {
    const card = back.closest('.flip-card');
    card.classList.remove('flipped');
  });
});


// Fade-up animation for Design+Dev Section
const designDevSection = document.querySelector('.designdev-section');

const designDevObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

if (designDevSection) {
  designDevObserver.observe(designDevSection);
}

// Fade-up Animation for Why Web3Across
const whySection = document.querySelector('.why-web3across');

const whyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

if (whySection) {
  whyObserver.observe(whySection);
}

// Fade-up Animation for Contact Section
const contactSection = document.querySelector('.contact-section');

const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

if (contactSection) {
  contactObserver.observe(contactSection);
}
