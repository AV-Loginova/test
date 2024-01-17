const buttonHide = document.querySelector(".btn-warning");
const blockHide = document.querySelector(".first-row-block");
const buttonSwap = document.querySelector(".btn-success");
const blockSwap = document.querySelector(".second-row-block-mid");
const module = document.querySelector(".pop-up");
const buttonClose = document.querySelector(".btn-primary");

buttonHide.addEventListener("click", () => {
  blockHide.classList.toggle("hidden");
});

buttonSwap.addEventListener("click", () => {
  blockSwap.classList.toggle("swap");
});

addEventListener("DOMContentLoaded", () => {
  module.classList.remove("hidden");
});

buttonClose.addEventListener("click", () => {
  module.classList.add("hidden");
});
