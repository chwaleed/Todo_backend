const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  console.log("HELLO");
  res.send("HEILLO");
});

app.listen(port, () => {
  console.log("Port is listining at port 5000");
});
