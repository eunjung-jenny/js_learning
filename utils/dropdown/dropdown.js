const menu_items = document.querySelectorAll(".menu__item");

const handleMouseLeave = function (event) {
  const sub_items = event.target.querySelectorAll(
    ".sub-menu__item"
  );
  sub_items.forEach((sub_item) =>
    sub_item.classList.remove("show")
  );
};

const handleMouseEnter = function (event) {
  const sub_menu = event.target.querySelector(".sub-menu");
  if (sub_menu) {
    event.target.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    const sub_items = sub_menu.querySelectorAll(
      ".sub-menu__item"
    );
    sub_items.forEach((sub_item) =>
      sub_item.classList.add("show")
    );
  }
};

const init = function () {
  menu_items.forEach((item) =>
    item.addEventListener("mouseenter", handleMouseEnter)
  );
};

init();
