"use client";

import { useEffect, useState } from "react";
import type { Todo, TodoId } from "../types/todo";
import * as todoApi from "../services/todo.api";
import { apiResponseHandler } from "../utils/api-handler";

export interface UseTodosReturn {
  todos: Todo[];
  isLoading: boolean;
  error: Error | null;
  addTodo: (text: string) => Promise<void>;
  removeTodo: (id: TodoId) => Promise<void>;
}

export const useTodos = (): UseTodosReturn => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchTodos = async () => {
    await apiResponseHandler(
      async () => {
        const data = await todoApi.getTodos();
        setTodos(data);
      },
      setIsLoading,
      setError
    )();
  };

  const addTodo = async (text: string) => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    await apiResponseHandler(
      async () => {
        await todoApi.createTodo(trimmedText);
        await fetchTodos();
      },
      setIsLoading,
      setError
    )();
  };

  const removeTodo = async (id: TodoId) => {
    await apiResponseHandler(
      async () => {
        await todoApi.deleteTodo(id);
        await fetchTodos();
      },
      setIsLoading,
      setError
    )();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, isLoading, error, addTodo, removeTodo };
};
