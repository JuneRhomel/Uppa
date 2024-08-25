import DuplicateFailure from "../../../domain/failure/common/duplicate.failure";
import UnhandledFailure from "../../../domain/failure/common/unhandled.failure";

export default async function FailureMapperUtil(error: any) {
    if (error.code === "ER_DUP_ENTRY") {
        let keyMatch = error.sqlMessage.match(/for key '([^']+)'/);
        if (keyMatch) {
            let duplicateKey = keyMatch[1]; 
            return new DuplicateFailure(duplicateKey);
        } else {
            
            return new DuplicateFailure('unknown_key');
        }
    }

    return new UnhandledFailure()
}