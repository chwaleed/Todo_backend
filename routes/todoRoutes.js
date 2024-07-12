import { Router } from "express";
import { addTodo } from "../controllers/addTodo.js";
import { getTodo } from "../controllers/getTodo.js";
import { removeTodo } from "../controllers/removeTodo.js";

const router = Router();

router.post("/addTodo", addTodo);
router.get("/getTodo", getTodo);
router.delete("/removeTodo", removeTodo);

export default router;
