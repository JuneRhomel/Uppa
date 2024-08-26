import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

import PatchSubMeterWaterUseCaseParams from "./interface/patch_sub_meter_water_use_case.params";
import ValidationFailure from "../../../failure/common/validation";
import SubMeterWaterModel from "../../../../data/model/sub_meter/sub_meter_water.model";
import PatchSubMeterWaterDataSource from "../../../../data/data_source/sub_meter_water/patch_sub_meter_water/patch_sub_meter_water.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";

export default async function PatchSubMeterWaterUseCase({
  authModel,
  subMeterWaterEntity,
}: PatchSubMeterWaterUseCaseParams) {
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

    return await PatchSubMeterWaterDataSource({
      authModel,
      subMeterWaterModel,
    });
  } catch (error) {
    return FailureMapperUtil(error)
  }
}
