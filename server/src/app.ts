import express from "express";
import cors from "cors";
import { globalErrorHandler } from "./utils/errorHandler";
import todoRoutes from "./routes/todo.routes";

export const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/todos", todoRoutes);

app.get("/health", (_req, res) => res.send("OK"));

app.use(globalErrorHandler);
