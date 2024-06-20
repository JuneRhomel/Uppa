class Failure extends Error {
  originalError: any;
  statusCode: number;
  constructor(message: string | undefined, originalError: any, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.name = "Failure";
    this.originalError = originalError;
  }
}

export default Failure;
