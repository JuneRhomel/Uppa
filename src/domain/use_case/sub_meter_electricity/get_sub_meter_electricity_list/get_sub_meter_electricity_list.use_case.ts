import { plainToInstance } from "class-transformer"
import GetSubMeterElectricityListDataSource from "../../../../data/data_source/sub_meter_electricity/get_sub_meter_electricity_list/get_sub_meter_electricity_list.data_source"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import GetSubMeterElectricityListEntity from "../../../entity/sub_meter/sub_meter_electricity_list.entity"
import Failure from "../../../failure/failure"
import PaginationModel from "../../../../data/model/panigation/panigation.model"
import GetSubMeterElectricityListUseCaseParams from "./interface/get_sub_meter_electricity_list_use_case.params"

export default async function GetSubMeterElectricityListUseCase({ authModel, paginationEntity }: GetSubMeterElectricityListUseCaseParams): Promise<Failure | GetSubMeterElectricityListEntity> {
    try {
        const paginationModel = plainToInstance(PaginationModel, paginationEntity, {
            excludeExtraneousValues: true
        })

        const response = await GetSubMeterElectricityListDataSource({ authModel, paginationModel })

        if (response instanceof Failure) return response

        return plainToInstance(GetSubMeterElectricityListEntity, response, { excludeExtraneousValues: true })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}