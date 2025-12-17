"use client";

import { useTodos } from "../hooks/useTodos";
import { ErrorMessage } from "./ErrorMessage";
import { TodoList } from "./TodoList";
import { TodoFooter } from "./TodoFooter";
import TodoListSkeleton from "./skeletons/todoSkeleton";

const TodoListContent = () => {
  const { todos, isLoading, error } = useTodos();
  return (
    <>
      {error ? (
        <ErrorMessage message={error.message} />
      ) : isLoading ? (
        <TodoListSkeleton />
      ) : (
        <>
          <TodoList todos={todos} />
          <TodoFooter taskCount={todos.length} />
        </>
      )}
    </>
  );
};

export default TodoListContent;
