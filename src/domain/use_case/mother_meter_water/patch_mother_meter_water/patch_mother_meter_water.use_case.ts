import { validate } from "class-validator";
import PatchMotherMeterWaterDataSource from "../../../../data/data_source/mother_meter_water/patch_mother_meter_water/patch_mother_meter_water.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import ValidationFailure from "../../../failure/common/validation";
import Failure from "../../../failure/failure";
import PatchMotherMeterWaterUseCaseParams from "./interface/patch_mother_meter_water_use_case.params";
import MotherMeterWaterModel from "../../../../data/model/mother_meter/mother_meter_water.model";
import { plainToInstance } from "class-transformer";


export default async function PatchMotherMeterWaterUseCase({ authModel, motherMeterWaterWaterEntity }: PatchMotherMeterWaterUseCaseParams): Promise<Failure | void> {
    try {
        const validation = await validate(
            motherMeterWaterWaterEntity,
        )

        if (validation.length > 0) {
            return new ValidationFailure({ extra: validation })
        }
        const motherMeterWaterWaterModel = plainToInstance(MotherMeterWaterModel, motherMeterWaterWaterEntity, { excludeExtraneousValues: true })

        return await PatchMotherMeterWaterDataSource({ authModel, motherMeterWaterWaterModel })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}