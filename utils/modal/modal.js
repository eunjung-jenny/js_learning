modal_paint = document.querySelector(".js-modal-btn");
modal_remove = document.querySelector(".js-modal-dismiss");
modal_wrapper = document.querySelector(".js-modal-wrapper");
modal_container = document.querySelector(
  ".js-modal-container"
);

const handleModalPaint = function () {
  modal_wrapper.classList.remove("deactive");
  setTimeout(() =>
    document.addEventListener("click", handleScreenClick)
  );
};

const handleModalRemove = function () {
  modal_wrapper.classList.add("deactive");
  document.removeEventListener("click", handleScreenClick);
};

const handleScreenClick = function (event) {
  const is_modal = !modal_wrapper.classList.contains(
    "deactive"
  );
  const is_outside = !modal_container.contains(
    event.target
  );

  if (is_modal && is_outside) {
    handleModalRemove();
  }
};

modal_paint.addEventListener("click", handleModalPaint);
modal_remove.addEventListener("click", handleModalRemove);
