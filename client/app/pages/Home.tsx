"use client";

import { TodoHeader } from "../components/TodoHeader";
import { TodoForm } from "../components/TodoForm";
import { Suspense } from "react";
import TodoListSkeleton from "../components/skeletons/todoSkeleton";
import { ErrorMessage } from "../components/ErrorMessage";
import { TodoList } from "../components/TodoList";
import { TodoFooter } from "../components/TodoFooter";
import { useTodos } from "../hooks/useTodos";

export const Home = () => {
  const { todos, isLoading, error } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden text-black">
        <TodoHeader />
        <TodoForm />
        <Suspense fallback={<TodoListSkeleton />}>
          <>
            {error ? (
              <ErrorMessage message={error.message} />
            ) : (
              <>
                <TodoList todos={todos} />
                <TodoFooter taskCount={todos.length} />
              </>
            )}
          </>
        </Suspense>
      </div>
    </div>
  );
};
