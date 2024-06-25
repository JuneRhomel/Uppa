import GetDataDataSource from "../../../../data/data_source/get_data/get_data.data_source";
import { plainToInstance } from "class-transformer";

import UnitModel from "../../../../data/model/unit/unit.model";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import Failure from "../../../failure/failure";
import GetUnitUseCaseParams from "./interface/get_unit_use_case.params";

export default async function GetUnitUseCase({ id, authModel }: GetUnitUseCaseParams): Promise<Failure | UnitModel> {
    try {
        const table = "unit"
        return await GetDataDataSource({ id, authModel, table })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}