import Failure from "../failure";

export default class ValidationFailure extends Failure {
    constructor() {
        super({
            code: 201,
            message: "ValidationFailure",
        });
    }
}
