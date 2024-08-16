import GetMotherMeterDataSource from "../../../../data/data_source/mother_meter_water/get_mother_meter_water/get_mother_meter_water.data_source"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import MotherMeterWaterEntity from "../../../entity/mother_meter/mother_meter_water.entity"
import Failure from "../../../failure/failure"
import GetMotherMeterUseCaseParams from "./interface/get_mother_meter_water_use_case.params"
import { plainToInstance } from "class-transformer"

export default async function GetMotherMeterUseCase({ authModel, id }: GetMotherMeterUseCaseParams): Promise<Failure | MotherMeterWaterEntity> {
    try {
        return await GetMotherMeterDataSource({ authModel, id })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}