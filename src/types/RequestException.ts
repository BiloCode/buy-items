class RequestException extends Error {
  constructor(readonly message: string, readonly statusCode: number) {
    super(message);
  }
}

export default RequestException;
