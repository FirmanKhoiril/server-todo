import express from "express";

import { getTodo, postTodo, editTodo, deleteTodo } from "../controllers/Todos.js";

const router = express.Router();

router.get("/getTodo", getTodo);
router.post("/getTodo", postTodo);
router.patch("/getTodo/:id", editTodo);
router.delete("/getTodo/:id", deleteTodo);

export default router;
