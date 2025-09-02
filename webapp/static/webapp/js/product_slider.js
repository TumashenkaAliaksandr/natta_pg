document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.products-slider');
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');

  if (!slider || !leftBtn || !rightBtn) return;

  const slideCount = slider.children.length;
  const slideWidth = slider.children[0].offsetWidth + 20; // ширина карточки + gap
  let currentIndex = 0;
  let isAnimating = false;

  function scrollToSlide(index) {
    if (isAnimating) return;
    isAnimating = true;

    // Цикличность слайдера
    if (index < 0) {
      currentIndex = slideCount - 1;
    } else if (index >= slideCount) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    slider.style.scrollBehavior = 'smooth';
    slider.scrollTo({
      left: slideWidth * currentIndex,
      behavior: 'smooth'
    });

    setTimeout(() => {
      isAnimating = false;
      slider.style.scrollBehavior = 'auto';
    }, 500);
  }

  leftBtn.addEventListener('click', () => {
    scrollToSlide(currentIndex - 1);
  });

  rightBtn.addEventListener('click', () => {
    scrollToSlide(currentIndex + 1);
  });

  // Автоматическая прокрутка каждые 3 секунды
  setInterval(() => {
    scrollToSlide(currentIndex + 1);
  }, 3000);
});
