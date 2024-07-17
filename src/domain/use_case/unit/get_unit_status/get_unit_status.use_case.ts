import { plainToInstance } from "class-transformer";
import GetDataDataSource from "../../../../data/data_source/core/get_data/get_data.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import UnitStatusEntity from "../../../entity/unit/unit_status.entity";
import Failure from "../../../failure/failure";
import GetUnitStatusParams from "./interface/get_unit_status_use_case.params";


export default async function GetUnitStatusUseCase({
  authModel,
}: GetUnitStatusParams): Promise<UnitStatusEntity[] | Failure> {
  try {
    const table = "list_unit_status";
    const data = await GetDataDataSource({ id: null, authModel, table });

    const propertyStatuses = plainToInstance(UnitStatusEntity, data, { excludeExtraneousValues: true });
    return propertyStatuses
  } catch (error) {
    return FailureMapperUtil(error);
  }
}
