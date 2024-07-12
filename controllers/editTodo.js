import Todo from "../models/todo.js";

export async function editTodo(req, res) {
  const { id, task } = await req.body;
  try {
    const todo = await Todo.findByIdAndUpdate(id, { task }, { new: true });
    if (!todo) {
      res.status(404).json({ message: "Todo not found or deleted" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(401).json({ message: `Error in editing Todo ${error}` });
  }
}
