import Todo from "../models/todo.js"; // Import your Todo model

export async function isCompleted(req, res) {
  const { id } = req.body;

  try {
    // Find the Todo and update it
    let todo = await Todo.findById(id);

    if (!todo) {
      res.status(404).json({ message: "Todo not found or deleted" });
      return;
    }

    todo = await Todo.findByIdAndUpdate(
      id,
      { $set: { completed: !todo.completed } },
      { new: true }
    );
    return res.status(200).json({ message: "Completed state changed" });
  } catch (error) {
    res.status(400).json({ message: `Error in toggling completed: ${error}` });
  }
}
