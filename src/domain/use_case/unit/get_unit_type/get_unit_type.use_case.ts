import GetDataDataSource from "../../../../data/data_source/get_data/get_data.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import Failure from "../../../failure/failure";
import GetUnitTypeParams from "./interface/get_unit_type_use_case.params";
export default async function GeUnitTypeUseCase({
  authModel,
}: GetUnitTypeParams): Promise<Failure> {
  try {
    const table = "list_unit_type";
    return await GetDataDataSource({ id: null, authModel, table });
  } catch (error) {
    return FailureMapperUtil(error);
  }
}
