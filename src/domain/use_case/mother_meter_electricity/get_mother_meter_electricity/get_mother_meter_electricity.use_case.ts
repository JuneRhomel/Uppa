import GetMotherMeterElectricityDataSource from "../../../../data/data_source/mother_meter_electricity/get_mother_meter_electricity/get_mother_meter_electricity.data_source"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import MotherMeterElectricityEntity from "../../../entity/mother_meter/mother_meter_electricity.entity"
import Failure from "../../../failure/failure"
import GetMotherMeterElectricityUseCaseParams from "./interface/get_mother_meter_electricity_use_case.params"

export default async function GetMotherMeterElectricityUseCase({ authModel, id }: GetMotherMeterElectricityUseCaseParams): Promise<Failure | MotherMeterElectricityEntity> {
    try {
        return await GetMotherMeterElectricityDataSource({ authModel, id })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}