modalPaint = document.querySelector(".js-modal-btn");
modalRemove = document.querySelector(".js-modal-dismiss");
modalWrapper = document.querySelector(".js-modal-wrapper");
modalContainer = document.querySelector(
  ".js-modal-container"
);

const handleModalPaint = function () {
  modalWrapper.classList.remove("deactive");
  setTimeout(() =>
    document.addEventListener("click", handleScreenClick)
  );
};

const handleModalRemove = function () {
  modalWrapper.classList.add("deactive");
  document.removeEventListener("click", handleScreenClick);
};

const handleScreenClick = function (event) {
  const is_modal = !modalWrapper.classList.contains(
    "deactive"
  );
  const is_outside = !modalContainer.contains(event.target);

  if (is_modal && is_outside) {
    handleModalRemove();
  }
};

modalPaint.addEventListener("click", handleModalPaint);
modalRemove.addEventListener("click", handleModalRemove);
