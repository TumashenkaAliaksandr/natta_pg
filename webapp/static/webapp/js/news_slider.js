document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.news-slider-track');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  let paused = false;
  let animationSpeed = 30; // секунд на полный цикл
  let progress = 0;
  let lastTimestamp = null;

  function animateSlider(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    if (!paused) {
      progress += (timestamp - lastTimestamp) / 1000;
      if (progress > animationSpeed) progress = 0;
      const percentage = -(progress / animationSpeed) * 50; // анимируем -50% по ширине
      track.style.transform = `translateX(${percentage}%)`;
    }
    lastTimestamp = timestamp;
    requestAnimationFrame(animateSlider);
  }
  requestAnimationFrame(animateSlider);

  leftArrow.addEventListener('click', () => {
    paused = true;
    // смещаем вправо на длину слайдов
    const computedStyle = window.getComputedStyle(track);
    const matrix = new DOMMatrixReadOnly(computedStyle.transform);
    let currentX = matrix.m41;
    currentX += 320 + 20; // ширина слайда + margin * 2
    track.style.transform = `translateX(${currentX}px)`;
    setTimeout(() => paused = false, 800);
  });

  rightArrow.addEventListener('click', () => {
    paused = true;
    const computedStyle = window.getComputedStyle(track);
    const matrix = new DOMMatrixReadOnly(computedStyle.transform);
    let currentX = matrix.m41;
    currentX -= 320 + 20;
    track.style.transform = `translateX(${currentX}px)`;
    setTimeout(() => paused = false, 800);
  });
});
