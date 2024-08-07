import PostMotherMeterElectricityDataSource from "../../../../data/data_source/mother_meter_electricity/post_mother_meter_electricity/post_mother_meter_electricity.data_source";
import MotherMeterElectricityModel from "../../../../data/model/mother_meter/mother_meter_electricity.model";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import ValidationFailure from "../../../failure/common/validation";
import Failure from "../../../failure/failure";
import PostMotherMeterElectricityUseCaseParams from "./interface/post_mother_meter_electricity_use_case.params";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export default async function PostMotherMeterElectricityUseCase({ authModel, motherMeterElectricityEntity }: PostMotherMeterElectricityUseCaseParams): Promise<Failure | void> {
    try {
        const validateError = await validate(
            motherMeterElectricityEntity
        )

        if (validateError.length > 0) {
            return new ValidationFailure({ extra: validateError })
        }

        const motherMeterElectricityModel = new MotherMeterElectricityModel(
            motherMeterElectricityEntity.id,
            motherMeterElectricityEntity.serialNumber,
            motherMeterElectricityEntity.createdAt
        )
        
        return await PostMotherMeterElectricityDataSource({ authModel, motherMeterElectricityModel })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}