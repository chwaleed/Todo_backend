import { Router } from "express";
import { addTodo } from "../controllers/addTodo.js";
import { getTodo } from "../controllers/getTodo.js";

const router = Router();

router.post("/addTodo", addTodo);
router.get("/getTodo", getTodo);

export default router;
