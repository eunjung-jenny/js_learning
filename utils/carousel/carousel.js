const leftBtn = document.querySelector(".js-left");
const rightBtn = document.querySelector(".js-right");
const items = document.querySelectorAll(".js-item");

const SHOWING_CLASS = "show";
const SLIDE_NUM = items.length;

const firstSlide = items[0];
const lastSlide = items[SLIDE_NUM - 1];

function handleLeft() {
  const currentSlide = document.querySelector(
    `.${SHOWING_CLASS}`
  );
  currentSlide.classList.remove(SHOWING_CLASS);

  const previousSlide = currentSlide.previousElementSibling;
  if (currentSlide === firstSlide) {
    lastSlide.classList.add(SHOWING_CLASS);
  } else {
    previousSlide.classList.add(SHOWING_CLASS);
  }
}

function handleRight() {
  const currentSlide = document.querySelector(
    `.${SHOWING_CLASS}`
  );
  currentSlide.classList.remove(SHOWING_CLASS);

  const nextSlide = currentSlide.nextElementSibling;
  if (currentSlide === lastSlide) {
    firstSlide.classList.add(SHOWING_CLASS);
  } else {
    nextSlide.classList.add(SHOWING_CLASS);
  }
}

leftBtn.addEventListener("click", handleLeft);
rightBtn.addEventListener("click", handleRight);
