/* eslint-disable no-undef */
import "dotenv/config";
import express from "express";
import { Connect } from "./dbconfig.js";
// import UserRouter from "./routes/todoRoutes.js";
import router from "./routes/todoRoutes.js";

const app = express();

Connect();
console.log("HELLO");

app.get("/", (req, res) => {
  console.log("HELLO");
  res.send("HEILLO");
});
app.use(express.json());

//api endpoints
app.use("/api/todo", router);
app.use("/api/todo", router);
app.use("/api/todo", router);
app.use("/api/todo", router);
app.use("/api/todo", router);
app.listen(process.env.PORT || 5000, () => {
  console.log("Server listening on port", process.env.PORT || 5000);
});
