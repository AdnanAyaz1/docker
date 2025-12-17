import axios from "axios";

export const BAsE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getTodos = async () => {
  const response = await axios.get(`${BAsE_URL}/todos`);
  return response.data;
};
export const createTodo = (text: string) =>
  axios.post(`${BAsE_URL}/todos`, { text }).then((res) => res.data);
export const deleteTodo = (id: string) =>
  axios.delete(`${BAsE_URL}/todos/${id}`).then((res) => res.data);
