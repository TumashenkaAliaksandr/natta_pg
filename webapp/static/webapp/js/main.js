document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
  });
});
document.querySelector('.close-button').addEventListener('click', () => {
  document.getElementById('top-bar').style.display = 'none';
});


document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide-left');
  const prevBtn = document.querySelector('.r-prev-btn');
  const nextBtn = document.querySelector('.r-next-btn');
  let current = 0;
  let isAnimating = false;

  function showSlide(newIndex) {
    if (isAnimating || newIndex === current) return;

    isAnimating = true;
    const total = slides.length;
    const oldSlide = slides[current];
    const newSlide = slides[newIndex];

    // Убираем слушатели на старом слайде на случай повторного анимационого цикла
    oldSlide.removeEventListener('animationend', onOldSlideEnd);

    newSlide.classList.add('active');

    // Функция окончания анимации старого слайда
    function onOldSlideEnd() {
      oldSlide.classList.remove('active', 'exit-left', 'exit-right');
      isAnimating = false;
      oldSlide.removeEventListener('animationend', onOldSlideEnd);
    }

    // Начинаем анимацию выхода старого слайда
    oldSlide.classList.add('exit-left');
    oldSlide.addEventListener('animationend', onOldSlideEnd);

    current = newIndex;
  }

  prevBtn.addEventListener('click', () => {
    if (isAnimating) return;
    const newIndex = (current - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  });

  nextBtn.addEventListener('click', () => {
    if (isAnimating) return;
    const newIndex = (current + 1) % slides.length;
    showSlide(newIndex);
  });
});
