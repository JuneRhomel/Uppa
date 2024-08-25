import DeleteSubMeterElectricityDataSource from "../../../../data/data_source/sub_meter_electricity/delete_sub_meter_electricity/delete_sub_meter_electricity.data_source"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import Failure from "../../../failure/failure"
import DeleteSubMeterElectricityUseCaseParams from "./interface/delete_sub_meter_electricity_use_case.params"

export default async function DeleteSubMeterElectricityUseCase({ authModel, id }: DeleteSubMeterElectricityUseCaseParams): Promise<Failure | void> {
    try {
        return await DeleteSubMeterElectricityDataSource({ authModel, id })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}