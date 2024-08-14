import DuplicateFailure from "../../../domain/failure/common/duplicate.failure";
import UnhandledFailure from "../../../domain/failure/common/unhandled.failure";

export default async function FailureMapperUtil(error: any) {
    if (error.code === "ER_DUP_ENTRY") {
        let keyMatch = error.sqlMessage.match(/for key '([^']+)'/);
        if (keyMatch) {
            let duplicateKey = keyMatch[1]; // Extracting the key name
            return new DuplicateFailure(duplicateKey);
        } else {
            // Handle the case where the key couldn't be extracted
            return new DuplicateFailure('unknown_key');
        }
    }

    return new UnhandledFailure()
}