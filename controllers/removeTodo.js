/* eslint-disable no-unused-vars */
import Todo from "../models/todo.js";

export async function removeTodo(req, res) {
  const { id } = await req.body;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo has been deleted successflly" });
  } catch (error) {
    return res.status(400).json({ error: `Error in Deleting Todo, ${error}` });
  }
}
