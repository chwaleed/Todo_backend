import { Router } from "express";
import { addTodo } from "../controllers/addTodo.js";

const router = Router();

router.post("/addTodo", addTodo);

export default router;
