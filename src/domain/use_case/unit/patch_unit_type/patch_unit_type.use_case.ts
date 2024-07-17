import PatchDataDataSource from "../../../../data/data_source/core/patch_data/patch_data.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import Failure from "../../../failure/failure";
import PatchUnitTypeUseCaseParams from "./interface/patch_unit_type_use_case.params";

export default async function PatchUnitTypeUseCase({
  unitTypeEntity,
  authModel,
}: PatchUnitTypeUseCaseParams): Promise<Failure | void> {
  try {
    const table = "list_unit_type";
    return await PatchDataDataSource({
      data: unitTypeEntity,
      table,
      authModel,
    });
  } catch (error) {
    return FailureMapperUtil(error);
  }
}
