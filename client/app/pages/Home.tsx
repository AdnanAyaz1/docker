import { TodoHeader } from "../components/TodoHeader";
import { TodoForm } from "../components/TodoForm";
import { Suspense } from "react";
import TodoListSkeleton from "../components/skeletons/todoSkeleton";
import { TodoListContent } from "../components/TodoListContent";

export const Home = async () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden text-black">
        <TodoHeader />
        <TodoForm />
        <Suspense fallback={<TodoListSkeleton />}>
          <TodoListContent />
        </Suspense>
      </div>
    </div>
  );
};
