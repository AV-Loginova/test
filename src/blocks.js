const buttonHide = document.querySelector(".btn-warning");
const blockHide = document.querySelector(".first-row");
const buttonSwap = document.querySelector(".btn-success");
const blockSwap = document.querySelector(".second-row-block-mid");
const module = document.querySelector(".pop-up-window");
const buttonClose = document.querySelector(".btn-primary");

//Спрятать блок
buttonHide.addEventListener("click", () => {
  blockHide.classList.toggle("hidden");
});

//Менять местами блоки
buttonSwap.addEventListener("click", () => {
  blockSwap.classList.toggle("swap");
});

//Закрыть модальное окно
buttonClose.addEventListener("click", () => {
  module.classList.toggle("hidden");
});
