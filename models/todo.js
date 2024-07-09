import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: Boolean,
});

const Todo = mongoose.models.todos || mongoose.model("todos", todoSchema);

export default Todo;
