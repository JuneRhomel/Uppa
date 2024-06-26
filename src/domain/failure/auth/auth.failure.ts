import Failure from "../failure";

export default class AuthFailure extends Failure {
    constructor() {
        super({
            code: 200,
            message: "CredentialsFailure",
        });
    }
}
