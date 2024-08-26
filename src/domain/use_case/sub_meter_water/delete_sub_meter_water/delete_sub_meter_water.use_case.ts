import DeleteSubMeterWaterDataSource from "../../../../data/data_source/sub_meter_water/delete_sub_meter_water/delete_sub_meter_water.data_source";
import DeleteMotherMeterWaterUseCaseParams from "../../mother_meter_water/delete_mother_meter_water/interface/delete_mother_meter_water_use_case.params";

export default async function DeleteSubMeterWaterUseCase({
  authModel,
  id,
}: DeleteMotherMeterWaterUseCaseParams) {
  return await DeleteSubMeterWaterDataSource({ authModel, id });
}
