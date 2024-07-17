import DeleteDataDataSource from "../../../../data/data_source/core/delete_data/delete_data.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import Failure from "../../../failure/failure";
import DeleteUnitUseCaseParams from "./interface/delete_unit_use_case.params";

export default async function DeleteUnitUseCase({ id, authModel }: DeleteUnitUseCaseParams): Promise<Failure | void> {
    try {
        const table = "unit";
        return await DeleteDataDataSource({ authModel, id, table })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}