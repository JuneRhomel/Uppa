export default class ValidationFailure {
    public statusCode: number;
    public message: ValidationFailureParams;
    constructor(message: ValidationFailureParams, statusCode: number) {
        this.statusCode = statusCode;
        this.message = message;
    }
}

interface ValidationFailureParams {
    message: string;
    code: number;
}