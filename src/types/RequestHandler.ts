import { Response } from "express";

import RequestBody from "./RequestBody";

type RequestHandler<T> = (
  request: RequestBody<T>,
  response: Response
) => Promise<void> | void;

export default RequestHandler;
