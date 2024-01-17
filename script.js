const buttonHide = document.querySelector(".btn-warning");
const blockHide = document.querySelector(".first-row-block");
const buttonSwap = document.querySelector(".btn-success");
const container = document.querySelector(".container-grid");
const buttonClose = document.querySelector(".btn-primary");
const module = document.querySelector(".pop-up");

addEventListener("DOMContentLoaded", () => {
  module.classList.remove("hidden");
});

buttonHide.addEventListener("click", () => {
  blockHide.classList.toggle("hidden");
});

buttonSwap.addEventListener("click", () => {
  container.classList.toggle("container-grid-swap");
});

buttonClose.addEventListener("click", () => {
  module.classList.add("hidden");
});
