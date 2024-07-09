import Todo from "../models/todo.js";

export const addTodo = async (req, res) => {
  try {
    // console.log(req.body);
    const { task } = req.body;

    if (!task) {
      return res.status(400).json({ error: "Please provide a task." });
    }

    const todo = await Todo.create({ task, completed: false });

    res.status(201).json(todo); // Use 201 Created for successful creation
  } catch (error) {
    console.error("Error adding todo:", error); // Log the error for debugging
    res.status(500).json({ error: "An error occurred while adding the todo." });
  }
};
