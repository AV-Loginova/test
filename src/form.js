const form = document.querySelector(".input-form");
const buttonSubmit = document.querySelector(".submit");
const result = document.querySelector(".submit-result");
const url = "https://opentdb.com/api.php?";

buttonSubmit.addEventListener("click", (e) => {
  //отменяет перезагрузку страницы по нажатию на кнопку
  e.preventDefault();
  //создает коллекцию formdata
  const formData = new FormData(form);
  //преобразует ее в объект
  const objectFormData = Object.fromEntries(formData);
  //выводит объект в поле резалт
  result.textContent = JSON.stringify(objectFormData, null, "\t");
  //формирует строку c параметрами
  const params = new URLSearchParams(objectFormData);
  let newUrl = url + params.toString();
  //отправляет get запрос
  fetch(newUrl).then((res) => {
    if (res.status === 200) {
      alert(`Data successfully send to URL:\n${newUrl}`);
      newUrl = url;
    } else {
      alert("Fail");
    }
  });
});
