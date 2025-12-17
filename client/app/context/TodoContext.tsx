"use client";

import { createContext, useContext, ReactNode } from "react";
import { useTodos } from "../hooks/useTodos";
import type { Todo, TodoId } from "../types/todo";

interface TodoContextType {
  todos: Todo[];
  isLoading: boolean;
  error: Error | null;
  addTodo: (text: string) => Promise<void>;
  removeTodo: (id: TodoId) => Promise<void>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const { todos, isLoading, error, addTodo, removeTodo } = useTodos();

  return (
    <TodoContext.Provider
      value={{ todos, isLoading, error, addTodo, removeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};
