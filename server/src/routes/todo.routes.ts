import { Router } from "express";
import * as todoController from "../controllers/todo.controller";

const router = Router();

router.get("/", todoController.getTodos);
router.get("/:id", todoController.getTodoById);
router.post("/", todoController.createTodo);
router.delete("/:id", todoController.deleteTodo);

export default router;
