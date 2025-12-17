"use client";
import { useState } from "react";
import type { Todo } from "../types/todo";
import { useTodoContext } from "../context/TodoContext";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { removeTodo } = useTodoContext();

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await removeTodo(todo._id);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <li
      className="flex items-center justify-between p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors last:border-b-0"
      aria-label={`Task: ${todo.text}`}
    >
      <span className="text-gray-800 flex-1 break-words">{todo.text}</span>
      <button
        onClick={handleDelete}
        className="ml-3 px-2 py-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-all flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-2 focus:outline-offset-2 focus:outline-red-500"
        aria-label={`Delete task: ${todo.text}`}
        title="Delete task"
        disabled={isDeleting}
        aria-busy={isDeleting}
      >
        {isDeleting ? "⋯" : "✕"}
      </button>
    </li>
  );
};
