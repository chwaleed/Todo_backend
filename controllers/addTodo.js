import Todo from "../models/todo";

export const addTodo = async (req, res) => {

  const { task } = await req.json();
  try {
    if(!task){
        res.status(400).json({"Provide any message"})
      }
    const todo = await Todo.create({ task, completed: false });
    res.status(200).json(todo);
  } catch (error) {
    console.log("Error in adding Todo")
  }
 
};
