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