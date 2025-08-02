// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });

// Animate headline on page load
window.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('h1');
  heading.style.opacity = '0';
  heading.style.transform = 'translateY(20px)';
  setTimeout(() => {
    heading.style.transition = 'all 1s ease';
    heading.style.opacity = '1';
    heading.style.transform = 'translateY(0)';
  }, 300);
});

// Button click interaction
document.querySelector('.client-btn').addEventListener('click', () => {
  alert("Here's what our clients say! (This can open a modal or redirect.)");
});
document.addEventListener("DOMContentLoaded", function () {
  const card = document.getElementById("missionCard");
  if (!card) return;

  // Reveal on enter
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          card.classList.add("visible");
          io.unobserve(card);
        }
      });
    },
    { threshold: 0.25 }
  );
  io.observe(card);
});
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".mission-card");
  if (!cards.length) return;

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  cards.forEach(card => {
    io.observe(card);
  });
});

