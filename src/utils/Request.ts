import Handler from "../types/RequestHandler";
import RequestException from "../types/RequestException";
import RequestMiddleware from "../types/RequestMiddleware";

class Request {
  private static DEFAULT_STATUS_CODE = 404;
  private static DEFAULT_ERROR_MESSAGE = "Unknown error";

  private static getRequestError(e: any) {
    const error = e as RequestException;
    const message = error.message || this.DEFAULT_ERROR_MESSAGE;
    const statusCode = error.statusCode || this.DEFAULT_STATUS_CODE;

    return {
      statusCode,
      message,
    };
  }

  static handler<T extends object>(callback: Handler<T>): Handler<T> {
    return async (req, res) => {
      try {
        await callback(req, res);
      } catch (e) {
        const { message, statusCode } = this.getRequestError(e);
        res.status(statusCode).send(message);
      }
    };
  }

  static middleware<T extends object>(
    callback: RequestMiddleware<T>
  ): RequestMiddleware<T> {
    return async (req, res, next) => {
      try {
        await callback(req, res, next);
      } catch (e) {
        const { message, statusCode } = this.getRequestError(e);
        res.status(statusCode).send(message);
      }
    };
  }
}

export default Request;
