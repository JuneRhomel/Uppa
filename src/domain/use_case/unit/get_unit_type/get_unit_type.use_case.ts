import GetDataDataSource from "../../../../data/data_source/get_data/get_data.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import UnitTypeEntity from "../../../entity/unit_type.entity";
import Failure from "../../../failure/failure";
import GetUnitTypeParams from "./interface/get_unit_type_use_case.params";
import { plainToInstance } from "class-transformer";

export default async function GeUnitTypeUseCase({
  authModel,
}: GetUnitTypeParams): Promise<UnitTypeEntity[] | Failure> {
  try {
    const table = "list_unit_type";
    const data = await GetDataDataSource({ id: null, authModel, table });


    const unitTypeEntity = plainToInstance(UnitTypeEntity, data, { excludeExtraneousValues: true });
    return unitTypeEntity
  } catch (error) {
    return FailureMapperUtil(error);
  }
}
