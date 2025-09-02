document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.news-slider-track');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  if (!track || !leftArrow || !rightArrow) return;

  const slides = track.querySelectorAll('.news-slide');
  const totalSlides = slides.length / 2; // половина, т.к. есть дубли
  const slideWidth = slides[0].offsetWidth + 20; // ширина + gap

  let currentIndex = 0;
  let isAnimating = false;

  // Изначально ставим в начало первого полного набора слайдов
  track.scrollLeft = 0;

  function goToSlide(index) {
    if (isAnimating) return;
    isAnimating = true;

    // Цикличность вперед / назад
    if (index < 0) {
      currentIndex = totalSlides - 1;
      // Мгновенно переключаем scrollLeft в конец первого набора
      track.style.scrollBehavior = 'auto';
      track.scrollLeft = currentIndex * slideWidth;
      // Легкий таймаут для плавного переключения
      setTimeout(() => {
        goToSlide(currentIndex - 1);
      }, 50);
      return;
    }

    if (index >= totalSlides) {
      currentIndex = 0;
      // Мгновенно переключаем scrollLeft в начало
      track.style.scrollBehavior = 'auto';
      track.scrollLeft = 0;
      setTimeout(() => {
        goToSlide(currentIndex + 1);
      }, 50);
      return;
    }

    currentIndex = index;
    track.style.scrollBehavior = 'smooth';
    track.scrollTo({
      left: currentIndex * slideWidth,
    });

    // Обработка окончания анимации смещения
    setTimeout(() => {
      isAnimating = false;
    }, 600); // время transition чуть больше 0.5s в CSS
  }

  leftArrow.addEventListener('click', () => {
    if (!isAnimating) goToSlide(currentIndex - 1);
  });

  rightArrow.addEventListener('click', () => {
    if (!isAnimating) goToSlide(currentIndex + 1);
  });

  // Автоматическая прокрутка каждые 3 секунды
  setInterval(() => {
    if (!isAnimating) goToSlide(currentIndex + 1);
  }, 3000);
});
