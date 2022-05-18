import { NextFunction, Response } from "express";

import RequestBody from "./RequestBody";

type RequestMiddleware<T> = (
  request: RequestBody<T>,
  response: Response,
  next: NextFunction
) => Promise<void> | void;

export default RequestMiddleware;
