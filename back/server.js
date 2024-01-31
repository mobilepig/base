const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
dotenv.config();
const port = 3000;

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

//.env테스트
console.log(process.env.test);

//axios테스트
app.get("/test", (req, res, next) => {
  res.json("data from back");
});

app.post("/postest", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(port, () => console.log("Server is running on : " + port));
