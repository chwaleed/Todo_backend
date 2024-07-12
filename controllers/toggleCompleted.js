import Todo from "../models/todo.js";

export async function isCompleted(req, res) {
  const { id } = req.body;
  try {
    const todo = await Todo.findByIdAndUpdate(
      id,
      { completed: !completed },
      { new: true }
    );
    if(!todo)
  } catch (error) {
    res.status(400).json({ message: `Error in toggling completed ${error}` });
  }
}
