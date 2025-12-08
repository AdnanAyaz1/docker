"use client";

import { useState } from "react";
import { addTodoAction } from "../services/todo.actions";

const ENTER_KEY = "Enter";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!text.trim()) return;
    setIsLoading(true);
    try {
      const result = await addTodoAction(text);
      if (result?.success) {
        setText("");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ENTER_KEY && !isLoading) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex gap-3 bg-gray-50 px-6 sm:px-8 py-4 border-b border-gray-200 flex-col sm:flex-row">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder={"Add a new task..."}
        className="input-primary"
        disabled={isLoading}
        autoFocus
      />
      <button
        onClick={handleSubmit}
        className="btn-primary whitespace-nowrap"
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? "ADDING..." : "ADD"}
      </button>
    </div>
  );
};
