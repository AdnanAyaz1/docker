import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  // here we can also inspect some erros that may occur like invalid key or jwt errors and write some custom response for that too but for now lets keep it simple.

  res.status(statusCode).json({ message });
};
