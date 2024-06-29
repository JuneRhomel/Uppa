import Failure from "../failure";

export default class PasswordMatchFailure extends Failure {
    constructor() {
        super({
            code: 201,
            message: "PasswordAndConfirmPasswordNotMatch",
        });
    }
}
