import Todo from "../models/todo.js";

export const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (todos.length == 0) {
      return res.status(404).json({ error: "No todos found." });
    }
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};
