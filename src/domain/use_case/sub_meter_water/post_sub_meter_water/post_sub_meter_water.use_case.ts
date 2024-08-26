import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import PostSubMeterUseCaseParams from "./interface/post_sub_meter_water_use_case.params";
import SubMeterWaterModel from "../../../../data/model/sub_meter/sub_meter_water.model";
import ValidationFailure from "../../../failure/common/validation";
import PostSubMetreWaterDataSource from "../../../../data/data_source/sub_meter_water/post_sub_meter_water/post_sub_meter_water.data_source";

export default async function PostSubMeterWaterUseCase({
  authModel,
  subMeterWaterEntity,
}: PostSubMeterUseCaseParams) {
  try {
    const errorValidation = await validate(subMeterWaterEntity);
    if (errorValidation.length > 0) {
      return new ValidationFailure({ extra: errorValidation });
    }

    const subMeterWaterModel = plainToInstance(
      SubMeterWaterModel,
      subMeterWaterEntity,
      {
        excludeExtraneousValues: true,
      }
    );

    return await PostSubMetreWaterDataSource({
      authModel,
      subMeterWaterModel,
    });
  } catch (error) {
    return FailureMapperUtil(error);
  }
}
