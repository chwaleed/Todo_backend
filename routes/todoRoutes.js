import { Router } from "express";
import { addTodo } from "../controllers/addTodo";

const router = Router();

router.post("/addTodo", addTodo);
