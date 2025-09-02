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
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let current = 0;
  let isAnimating = false;

  function showSlide(newIndex) {
    if (isAnimating || newIndex === current) return;

    isAnimating = true;
    const total = slides.length;
    const oldSlide = slides[current];
    const newSlide = slides[newIndex];

    // Анимация выхода старого слайда налево
    oldSlide.classList.remove('active', 'enter-right');
    oldSlide.classList.add('exit-left');

    // Анимация появления нового слайда справа
    newSlide.classList.remove('exit-left');
    newSlide.classList.add('enter-right', 'active');

    // После анимации убрать классы выхода
    oldSlide.addEventListener('animationend', () => {
      oldSlide.classList.remove('exit-left');
      isAnimating = false;
    }, { once: true });

    current = newIndex;
  }

  prevBtn.addEventListener('click', () => {
    const newIndex = (current - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  });

  nextBtn.addEventListener('click', () => {
    const newIndex = (current + 1) % slides.length;
    showSlide(newIndex);
  });
});
