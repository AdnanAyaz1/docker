import { getTodos } from "../services/todo.api";
import { ErrorMessage } from "./ErrorMessage";
import { TodoFooter } from "./TodoFooter";
import { TodoList } from "./TodoList";

export async function TodoListContent() {
  let todos = [];
  let error = null;

  try {
    todos = await getTodos();
  } catch (err: any) {
    if (err.code === "ECONNREFUSED") error = "Unable to connect to database";
    else error = err.message;
  }

  return (
    <>
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <TodoList todos={todos} />
          <TodoFooter taskCount={todos.length} />
        </>
      )}
    </>
  );
}
