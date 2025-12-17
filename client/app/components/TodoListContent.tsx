"use client";

import { useTodoContext } from "../context/TodoContext";
import { ErrorMessage } from "./ErrorMessage";
import { TodoList } from "./TodoList";
import { TodoFooter } from "./TodoFooter";
import TodoListSkeleton from "./skeletons/todoSkeleton";

const TodoListContent = () => {
  const { todos, isLoading, error } = useTodoContext();

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
