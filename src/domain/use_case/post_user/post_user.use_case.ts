import PostDataDataSource from "../../../data/data_source/post_data/post_data.data_source";
import ValidationFailure from "../../failure/common/validation";
import Failure from "../../failure/failure";
import PostUserUseCaseParams from "./interface/post_user_use_case.params";
export default async function PostUserUseCase(
  props: PostUserUseCaseParams
): Promise<void | Failure | ValidationFailure> {
  try {
    if (props.password !== props.confirmPassword) {
      return new ValidationFailure({
        message: "Passwords do not match",
        code: 1000,
      },
        400
      )
    }

    if (props.password.length < 8) {
      return new ValidationFailure({
        message: "Password should be at least 8 characters",
        code: 1001
      },
        400
      )
    }

    await PostDataDataSource({
      database: "uppa_accounts",
      table: "account",
      data: {
        firstname: props.firstname,
        lastname: props.lastname,
        email: props.email,
        password: props.password,
        is_active: 1
      }
    })
  } catch (error) {
    return new Failure("Failed in post user use case", error, 500);
  }
}
