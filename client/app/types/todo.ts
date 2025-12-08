export interface Todo {
  _id: string;
  text: string;
}

export type TodoId = Todo["_id"];
