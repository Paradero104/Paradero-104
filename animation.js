const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // Si quieres que la animación solo se ejecute una vez
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.4,
  }
);

// Selecciona todos los elementos animables
document
  .querySelectorAll(".animate-left, .animate-right, .animate-up")
  .forEach((el) => observer.observe(el));
