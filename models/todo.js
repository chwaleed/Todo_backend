import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: Boolean,
});

export default mongoose.model("Todo", todoSchema);
