const buttonHide = document.querySelector(".btn-warning");
const blockHide = document.querySelector(".first-row");
const buttonSwap = document.querySelector(".btn-success");
const blockSwap = document.querySelector(".second-row-block-mid");
const module = document.querySelector(".pop-up-window");
const buttonClose = document.querySelector(".btn-primary");

function blockClassToggle(block, blockClass) {
  return function () {
    block.classList.toggle(blockClass);
  };
}

//Спрятать блок
buttonHide.addEventListener("click", blockClassToggle(blockHide, "hidden"));

//Менять местами блоки
buttonSwap.addEventListener("click", blockClassToggle(blockSwap, "swap"));

//Закрыть модальное окно
buttonClose.addEventListener("click", blockClassToggle(module, "hidden"));
