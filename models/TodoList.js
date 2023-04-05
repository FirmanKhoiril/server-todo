import mongoose from "mongoose";

const TodoListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const TodoSchema = mongoose.model("todos", TodoListSchema);

export default TodoSchema;
