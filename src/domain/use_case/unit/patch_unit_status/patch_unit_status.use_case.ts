import PatchDataDataSource from "../../../../data/data_source/patch_data/patch_data.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import Failure from "../../../failure/failure";
import PatchUnitStatusUseCaseParams from "./interface/patch_unit_status_use_case";

export default async function PatchUnitStatusUseCase({ data, authModel }: PatchUnitStatusUseCaseParams): Promise<Failure | void> {
    try {
        const table = "list_unit_status";
        return await PatchDataDataSource({ data, table, authModel })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}