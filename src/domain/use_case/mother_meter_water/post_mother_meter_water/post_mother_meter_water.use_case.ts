import { validate } from "class-validator";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import Failure from "../../../failure/failure";
import PostMotherMeterWaterDataSourceParams from "./interface/post_mother_meter_water_use_case.params";
import ValidationFailure from "../../../failure/common/validation";
import MotherMeterWaterModel from "../../../../data/model/mother_meter/mother_meter_water.model";
import PostMotherMeterWaterDataSource from "../../../../data/data_source/mother_meter_water/post_mother_meter_water/post_mother_meter_water.data_source";
import { plainToInstance } from "class-transformer";
export default async function PostMotherMeterWaterUseCase({ authModel, motherMeterWaterEntity }: PostMotherMeterWaterDataSourceParams): Promise<void | Failure> {
    try {
        const validation = await validate(
            motherMeterWaterEntity,
        )

        if (validation.length > 0) {
            return new ValidationFailure({ extra: validation })
        }
        const motherMeterWaterModel = new MotherMeterWaterModel(
            motherMeterWaterEntity.id,
            motherMeterWaterEntity.serialNumber,
            motherMeterWaterEntity.createdAt
        )

        const response = await PostMotherMeterWaterDataSource({
            authModel,
            motherMeterWaterModel
        })
        return response

    } catch (error) {
        return FailureMapperUtil(error)
    }
}