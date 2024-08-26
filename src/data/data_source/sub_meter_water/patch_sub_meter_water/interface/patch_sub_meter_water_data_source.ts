import AuthModel from "../../../../model/auth/auth.model"
import SubMeterWaterModel from "../../../../model/sub_meter/sub_meter_water.model"

export default interface PatchSubMeterWaterDataSourceParams {
    authModel: AuthModel
    subMeterWaterModel: SubMeterWaterModel
}