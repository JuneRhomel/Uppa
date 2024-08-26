import GetSubMeterWaterDataSource from "../../../../data/data_source/sub_meter_water/get_sub_meter_water/get_sub_meter_water.data_source"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import SubMeterWaterEntity from "../../../entity/sub_meter/sub_meter_water.entity"
import Failure from "../../../failure/failure"
import GetSubMeterWaterUseCaseParams from "./interface/get_sub_meter_water_use_case.params"

export default async function GetSubMeterWaterUseCase({ authModel, id }: GetSubMeterWaterUseCaseParams): Promise<Failure | SubMeterWaterEntity> {
    try {
        return await GetSubMeterWaterDataSource({ authModel, id })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}