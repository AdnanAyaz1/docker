import { ITodo, Todo } from "../models/todo.model";

export const getTodos = async (): Promise<ITodo[]> => Todo.find();

export const getTodoById = async (id: string): Promise<ITodo | null> => {
  return Todo.findById(id);
};

export const createTodo = async (text: string): Promise<ITodo> => {
  const todo = new Todo({ text });
  return todo.save();
};

export const deleteTodo = async (id: string): Promise<void> => {
  await Todo.findByIdAndDelete(id);
};
