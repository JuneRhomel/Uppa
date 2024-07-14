import DeleteDataDataSource from "../../../../data/data_source/delete_data/delete_data.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import Failure from "../../../failure/failure";
import DeleteUnitStatusUseCaseParams from "./interface/delete_unit_status_use_case.params";

export default async function DeleteUnitStatusUseCase({ id, authModel }: DeleteUnitStatusUseCaseParams): Promise<Failure | void> {
    try {
        const table = "list_unit_status";
        return await DeleteDataDataSource({ authModel, id, table })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}