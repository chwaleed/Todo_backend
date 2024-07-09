import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, "Please provide any task or message"],
  },
  completed: Boolean,
});

const Todo = mongoose.models.todos || mongoose.model("todos", todoSchema);

export default Todo;
