require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("HELLO");
  res.send("HEILLO");
});

app.listen(process.env.PORT, () => {
  console.log("Port is listining at port 5000");
});
