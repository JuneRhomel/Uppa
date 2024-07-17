import { validate } from "class-validator";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import ValidationFailure from "../../../failure/common/validation";
import Failure from "../../../failure/failure";
import PatchUnitUseCaseParams from "./interface/patch_unit_use_case.params";
import PatchDataDataSource from "../../../../data/data_source/core/patch_data/patch_data.data_source";

export default async function PatchUnitUseCase({ unitEntity, authModel }: PatchUnitUseCaseParams): Promise<Failure | void> {
    try {
        const unitErrorValidation = await validate(
            unitEntity
        );
        if (unitErrorValidation.length > 0) {
            return new ValidationFailure({ extra: unitErrorValidation });
        }

        const dataToUpdate = {
            id: unitEntity.id,
            unit_name: unitEntity.unit_name,
            unit_type_id: unitEntity.unit_type_id,
            unit_status_id: unitEntity.unit_status_id
        }
        const patchtUnit = await PatchDataDataSource({ authModel, table: "unit", data: dataToUpdate })
        return patchtUnit;
    } catch (error) {
        return FailureMapperUtil(error)
    }
}