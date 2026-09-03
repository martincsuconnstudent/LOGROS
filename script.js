// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Animate fundraising bars into view
  document.querySelectorAll('.bar-fill[data-target]').forEach((bar) => {
    const target = bar.getAttribute('data-target');
    requestAnimationFrame(() => {
      setTimeout(() => { bar.style.width = target + '%'; }, 150);
    });
  });

  // Event category filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const eventItems = document.querySelectorAll('.event-item');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      const cat = btn.getAttribute('data-filter');
      eventItems.forEach((item) => {
        const show = cat === 'all' || item.getAttribute('data-cat') === cat;
        item.style.display = show ? 'grid' : 'none';
      });
    });
  });

  // Simple form handling (no backend yet — placeholder confirmation)
  document.querySelectorAll('form[data-placeholder-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = form.querySelector('.form-note');
      if (note) {
        note.textContent = "Thanks — this form isn't wired up to send yet. Email logros@uconn.edu directly for now.";
        note.style.display = 'block';
      }
    });
  });
});
