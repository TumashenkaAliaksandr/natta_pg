const leftSlides = document.querySelectorAll('.slider-left .slide-left');
const rightSlides = document.querySelectorAll('.slider-right .slide-right');

let leftIndex = 0;
let rightIndex = 0;

function showLeftSlide(index) {
  leftSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function showRightSlides(startIndex) {
  // Делаем активными 4 слайда подряд, циклично
  rightSlides.forEach((slide, i) => {
    let idx = (startIndex + i) % rightSlides.length;
    slide.classList.toggle('active', i < 4 && rightSlides[idx] === slide);
  });
}

function cycleSlides() {
  leftIndex = (leftIndex + 1) % leftSlides.length;
  showLeftSlide(leftIndex);

  rightIndex = (rightIndex + 1) % rightSlides.length;
  showRightSlides(rightIndex);
}

showLeftSlide(leftIndex);
showRightSlides(rightIndex);

setInterval(cycleSlides, 4000);
