import TodoSchema from "../models/TodoList.js";
import mongoose from "mongoose";

export const getTodo = async (req, res) => {
  try {
    const GetTodo = await TodoSchema.find();
    res.status(200).json(GetTodo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postTodo = async (req, res) => {
  const todo = req.body;

  const newTodo = new TodoSchema(todo);

  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editTodo = async (req, res) => {
  const { id } = req.params;
  const { name, age, message } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with ${id}`);

  const updatedTodos = { name, age, message, _id: id };

  await TodoSchema.findByIdAndUpdate(id, updatedTodos, { new: true });

  res.json(updatedTodos);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Post with that ${id}`);

  await TodoSchema.findByIdAndRemove(id);

  res.json({ message: `Post already deleted ${id}` });
};
