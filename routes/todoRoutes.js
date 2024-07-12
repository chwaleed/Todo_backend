import { Router } from "express";
import { addTodo } from "../controllers/addTodo.js";
import { getTodo } from "../controllers/getTodo.js";
import { removeTodo } from "../controllers/removeTodo.js";
import { editTodo } from "../controllers/editTodo.js";
import { isCompleted } from "../controllers/isCompleted.js";

const router = Router();

router.post("/addTodo", addTodo);
router.get("/getTodo", getTodo);
router.delete("/removeTodo", removeTodo);
router.put("/editTodo", editTodo);
router.post("/isCompleted", isCompleted);

export default router;
