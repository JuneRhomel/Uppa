import Failure from "../failure";

export default class UnhandledFailure extends Failure {
  constructor() {
    super({
      code: 101,
      message: "UnhandledFailure",
    });
  }
}
