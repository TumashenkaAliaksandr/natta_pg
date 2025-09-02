document.addEventListener('DOMContentLoaded', () => {
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const container = document.querySelector('.chips-container');
  const chips = document.querySelectorAll('.chip');

  // Переменная для ширины шага — ширина одного чипса + gap, берем первый
  const step = chips[0].offsetWidth + 12; // 12 - gap между чипсами

  leftArrow.addEventListener('click', () => {
    container.scrollBy({ left: -step * 3, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    container.scrollBy({ left: step * 3, behavior: 'smooth' });
  });

  // Логика переключения активного состояния чипсов
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-pressed', 'true');
    });
  });
});
