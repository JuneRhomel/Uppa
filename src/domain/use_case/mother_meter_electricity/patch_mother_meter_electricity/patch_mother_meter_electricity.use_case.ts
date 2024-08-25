import { validate } from "class-validator";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import ValidationFailure from "../../../failure/common/validation";
import Failure from "../../../failure/failure";
import PatchMotherMeterElectricityUseCaseParams from "./interface/patch_mother_meter_electricity_use_case.params";
import PatchMotherMeterElectricityDataSource from "../../../../data/data_source/mother_meter_electricity/patch_mother_meter_electricity/patch_mother_meter_electricity.data_source";
import MotherMeterElectricityModel from "../../../../data/model/mother_meter/mother_meter_electricity.model";

export default async function PatchMotherMeterElectricityUseCase({ authModel, motherMeterElectricityEntity }: PatchMotherMeterElectricityUseCaseParams): Promise<Failure | void> {
    try {
        const validation = await validate(
            motherMeterElectricityEntity,
        )

        if (validation.length > 0) {
            return new ValidationFailure({ extra: validation })
        }

        const motherMeterElectricityModel = new MotherMeterElectricityModel(
            motherMeterElectricityEntity.id,
            motherMeterElectricityEntity.serialNumber,
            motherMeterElectricityEntity.createdAt
        )

        return await PatchMotherMeterElectricityDataSource({ authModel, motherMeterElectricityModel })
        
    } catch (error) {
        return FailureMapperUtil(error);
    }
}