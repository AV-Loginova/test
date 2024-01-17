const express = require("express");
const app = express();
const port = 3000;

//обработка get запроса
app.get("/", (req, res) => {
  //добавление заголовка, чтобы избежать ошибки CORS
  res.append("Access-Control-Allow-Origin", "*");
  //отправка ответа со статусом 200
  res.sendStatus(200);
  console.log("Respond");
});

app.listen(port, () => {
  console.log(`Listening ${port}`);
});
