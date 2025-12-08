"use server";

import { revalidatePath } from "next/cache";
import * as todoApi from "./todo.api";
import { apiErrorHandler } from "../utils/api-handler";

export async function addTodoAction(text: string) {
  try {
    await todoApi.createTodo(text);
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    apiErrorHandler(error);
  }
}

export async function deleteTodoAction(id: string) {
  try {
    await todoApi.deleteTodo(id);
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    apiErrorHandler(error);
  }
}
