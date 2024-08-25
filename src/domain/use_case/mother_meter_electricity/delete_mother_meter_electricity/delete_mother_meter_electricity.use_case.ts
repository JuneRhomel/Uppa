import DeleteMotherMeterElectricityDataSource from "../../../../data/data_source/mother_meter_electricity/delete_mother_meter_electricity/delete_mother_meter_electricity.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import Failure from "../../../failure/failure";
import DeleteMotherMeterElectricityUseCaseParams from "./interface/delete_mother_meter_electricty_use_case.params";

export default async function DeleteMotherMeterElectricityUseCase({ authModel, id }: DeleteMotherMeterElectricityUseCaseParams): Promise<Failure | void> {
    try {
        const table = "mother_meter_electricity";
        return await DeleteMotherMeterElectricityDataSource({ authModel, id })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}