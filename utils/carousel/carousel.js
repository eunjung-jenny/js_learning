const left_btn = document.querySelector(".js-left");
const right_btn = document.querySelector(".js-right");
const items = document.querySelectorAll(".js-item");

const SHOWING_CLASS = "show";
const ITEM_NUM = items.length;

function handleLeft() {
  for (let i = 0; i < ITEM_NUM; i++) {
    if (items[i].classList.contains(SHOWING_CLASS)) {
      items[i].classList.remove(SHOWING_CLASS);
      items[(i + ITEM_NUM - 1) % ITEM_NUM].classList.add(
        SHOWING_CLASS
      );
      break;
    }
  }
}

function handleRight() {
  for (let i = 0; i < ITEM_NUM; i++) {
    if (items[i].classList.contains(SHOWING_CLASS)) {
      items[i].classList.remove(SHOWING_CLASS);
      items[(i + 1) % ITEM_NUM].classList.add(
        SHOWING_CLASS
      );
      break;
    }
  }
}

left_btn.addEventListener("click", handleLeft);
right_btn.addEventListener("click", handleRight);
