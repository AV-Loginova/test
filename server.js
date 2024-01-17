const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.append("Access-Control-Allow-Origin", "*");
  res.sendStatus(200);
  console.log("Respond");
});

app.listen(port, () => {
  console.log(`Listening ${port}`);
});
