import Todo from "../models/todo";

export async function removeTodo(req, res) {
  const { id } = await req.body;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    console.log(todo);
  } catch (error) {
    return res.status(400).json({ error: `Error in Deleting Todo, ${error}` });
  }
}
