import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { Connect } from "./dbconfig.js";

const app = express();

Connect();
console.log("HELLO");

app.get("/", (req, res) => {
  console.log("HELLO");
  res.send("HEILLO");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server listening on port", process.env.PORT || 5000);
});
