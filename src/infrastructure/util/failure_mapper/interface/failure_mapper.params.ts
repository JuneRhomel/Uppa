import Failure from "../../../../domain/failure/failure";

export default interface FailureMapperUtilInterface {
    (error: any): Failure;
}
