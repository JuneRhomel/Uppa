import Failure from "../failure";

export default class DuplicateFailure extends Failure {
    constructor(extra: any) {
        super({
            code: 200,
            message: "DuplicateFailure",
            extra: extra,
        });
    }
}
