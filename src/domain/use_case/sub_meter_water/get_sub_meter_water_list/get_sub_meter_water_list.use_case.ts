import { plainToInstance } from "class-transformer";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import GetSubMeterWaterListUseCaseParams from "./interface/get_sub_meter_water_list_use_case";
import PaginationModel from "../../../../data/model/panigation/panigation.model";
import GetSubMeterWaterListDataSource from "../../../../data/data_source/sub_meter_water/get_sub_meter_water_list/get_sub_meter_water_list.data_source";
import Failure from "../../../failure/failure";
import GetSubMeterWaterListEntity from "../../../entity/sub_meter/sub_meter_water_list.entity";

export default async function ({
  authModel,
  paginationEntity,
}: GetSubMeterWaterListUseCaseParams) {
  try {
    const paginationModel = plainToInstance(PaginationModel, paginationEntity, {
      excludeExtraneousValues: true,
    });

    const response = await GetSubMeterWaterListDataSource({
      authModel,
      paginationModel,
    });

    if (response instanceof Failure) return response;

    return plainToInstance(GetSubMeterWaterListEntity, response, {
        excludeExtraneousValues: true,
    })
  } catch (error) {

    return FailureMapperUtil(error);

  }
}
