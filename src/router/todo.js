import express from "express";
import todoController from "../controller/todo.js";

const todoRouter = express.Router();

todoRouter.get("/todos", todoController.getAllTodos); // Get all Todos
todoRouter.post("/todos", todoController.createTodo); // Create a Todo
todoRouter.post("/todos/:id", todoController.updateTodo); // Update a Todo
todoRouter.get("/todos/:id", todoController.deleteTodo);

export default todoRouter;
