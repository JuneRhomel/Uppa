import DeleteMotherMeterWaterDataSource from "../../../../data/data_source/mother_meter_water/delete_mother_meter_water/delete_moter_meter_water.data_source"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import Failure from "../../../failure/failure"
import DeleteMotherMeterWaterUseCaseParams from "./interface/delete_mother_meter_water_use_case.params"

export default async function DeleteMotherMeterWaterUseCase({ authModel, id }: DeleteMotherMeterWaterUseCaseParams): Promise<Failure | void> {
    try {
        return await DeleteMotherMeterWaterDataSource({ authModel, id })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}