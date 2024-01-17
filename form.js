const firstList = document.querySelector(".first-list");
const secondList = document.querySelector(".second-list");
const thirdList = document.querySelector(".third-list");
const fourthList = document.querySelector(".fourth-list");
const fifthList = document.querySelector(".fifth-list");
const firstInput = document.querySelector(".first-input");
const secondInput = document.querySelector(".second-input");
const buttonSubmit = document.querySelector(".submit");
const result = document.querySelector(".submit-result");
const url = "http://localhost:3000/";
let obj = {};

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  obj = {
    firstList: firstList.value,
    secondList: secondList.value,
    thirdList: thirdList.value,
    fourthList: fourthList.value,
    fifthList: fifthList.value,
    firstInput: firstInput.value,
    secondInput: secondInput.value,
  };
  result.textContent = JSON.stringify(obj, null, "\t");
  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        alert("Success");
      } else {
        alert("Failed");
      }
    })
    .catch();
});
