import { validate } from "class-validator"
import { plainToInstance } from "class-transformer"
import PostSubMeterElectricityDataSource from "../../../../data/data_source/sub_meter_electricity/post_sub_meter_electricity/post_sub_meter_electricity.data_source"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import Failure from "../../../failure/failure"
import PostSubMeterElectricityUseCaseParams from "./interface/post_sub_meter_electricity_use_case.params"
import ValidationFailure from "../../../failure/common/validation"
import SubMeterElectricityModel from "../../../../data/model/sub_meter/sub_meter_electricity.model"

export default async function PostSubMeterElectricityUseCase({ authModel, subMeterElectricityEntity }: PostSubMeterElectricityUseCaseParams): Promise<Failure | void> {
    try {
        const validateError = await validate(subMeterElectricityEntity)

        if (validateError.length > 0) return new ValidationFailure({ extra: validateError })

        const subMeterElectricityModel = plainToInstance(SubMeterElectricityModel, subMeterElectricityEntity,{
            excludeExtraneousValues: true
        })
        return await PostSubMeterElectricityDataSource({ authModel, subMeterElectricityModel })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}