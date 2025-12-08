import type { Todo, TodoId } from "../types/todo";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400" role="status">
        <p className="text-lg"> ✨ No tasks yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <ul
      className="space-y-1 max-h-96 overflow-y-auto px-6 sm:px-8 py-6"
      role="list"
    >
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
};
