import { Request, Response } from "express";
import * as todoService from "../services/todo.service";
import { asyncHandler } from "../utils/asyncHandler";
import { Status } from "../constants/status";

export const getTodos = asyncHandler(async (_req: Request, res: Response) => {
  const todos = await todoService.getTodos();
  res.status(Status.OK).json(todos);
});

export const getTodoById = asyncHandler(async (req: Request, res: Response) => {
  const todo = await todoService.getTodoById(req.params.id);
  res.status(Status.OK).json(todo);
});

export const createTodo = asyncHandler(async (req: Request, res: Response) => {
  const { text } = req.body;
  const todo = await todoService.createTodo(text);
  res.status(Status.CREATED).json(todo);
});

export const deleteTodo = asyncHandler(async (req: Request, res: Response) => {
  await todoService.deleteTodo(req.params.id);
  res.status(Status.OK).json({ message: "Deleted" });
});
