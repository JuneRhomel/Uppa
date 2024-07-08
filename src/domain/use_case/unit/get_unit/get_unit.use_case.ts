import UnitModel from "../../../../data/model/unit/unit.model";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import Failure from "../../../failure/failure";
import GetUnitUseCaseParams from "./interface/get_unit_use_case.params";
import GetUnitDataSource from "../../../../data/data_source/get_unit/get_unit.data_source";

export default async function GetUnitUseCase({ id, authModel }: GetUnitUseCaseParams): Promise<Failure | UnitModel> {
    try {
        return await GetUnitDataSource({ id, authModel })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}