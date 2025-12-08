import mongoose from "mongoose";

export interface ITodo extends mongoose.Document {
  text: string;
}

const TodoSchema = new mongoose.Schema<ITodo>({
  text: { type: String, required: true },
});

export const Todo = mongoose.model<ITodo>("Todo", TodoSchema);
