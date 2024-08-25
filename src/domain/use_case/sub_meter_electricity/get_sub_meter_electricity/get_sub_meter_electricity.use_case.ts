import { plainToInstance } from "class-transformer"
import GetSubMeterElectricityDataSource from "../../../../data/data_source/sub_meter_electricity/get_sub_meter_electricity/get_sub_meter_electricity.data_source"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import SubMeterElectricityEntity from "../../../entity/sub_meter/sub_meter_electricity.entity"
import Failure from "../../../failure/failure"
import GetSubMeterElectricityUseCaseParams from "./interface/get_sub_meter_electricity_use_case.params"

export default async function GetSubMeterElectricityUseCase({ authModel, id }: GetSubMeterElectricityUseCaseParams): Promise<Failure | SubMeterElectricityEntity> {
    try {
        const response = await GetSubMeterElectricityDataSource({ authModel, id })
        
        if (response instanceof Failure) return response

        return plainToInstance(SubMeterElectricityEntity, response, { excludeExtraneousValues: true })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}