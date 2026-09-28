// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Project filter
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');

    const filter = chip.dataset.filter;
    cards.forEach((card) => {
      const show = filter === 'all' || card.dataset.type === filter;
      card.classList.toggle('hide', !show);
    });
  });
});
