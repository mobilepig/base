const dotenv = require("dotenv");
const express = require("express");

const app = express();
dotenv.config();
const port = 3000;

//.env테스트
console.log(process.env.test);

//axios테스트
app.get("/test", (req, res, next) => {
  res.json("data from back");
});

app.listen(port, () => console.log("Server is running on : " + port));
