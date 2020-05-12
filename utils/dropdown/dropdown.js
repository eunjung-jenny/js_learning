const menuItems = document.querySelectorAll(".menu__item");

const handleMouseLeave = function (event) {
  const subItems = event.target.querySelectorAll(
    ".sub-menu__item"
  );
  subItems.forEach((subItem) =>
    subItem.classList.remove("show")
  );
};

const handleMouseEnter = function (event) {
  const subMenu = event.target.querySelector(".sub-menu");
  if (subMenu) {
    event.target.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    const subItems = subMenu.querySelectorAll(
      ".sub-menu__item"
    );
    subItems.forEach((subItem) =>
      subItem.classList.add("show")
    );
  }
};

const init = function () {
  menuItems.forEach((item) =>
    item.addEventListener("mouseenter", handleMouseEnter)
  );
};

init();
