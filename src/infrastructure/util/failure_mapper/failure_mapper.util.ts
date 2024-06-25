import UnhandledFailure from "../../../domain/failure/common/unhandled.failure";

export default async function FailureMapperUtil(error: any) {
    console.log(error)
    return new UnhandledFailure()
}