import AuthModel from "../../../../model/auth/auth.model"
import MotherMeterWaterModel from "../../../../model/mother_meter/mother_meter_water.model"

export default interface PostMotherMeterWaterDataSourceParams {
    authModel: AuthModel
    motherMeterWaterModel: MotherMeterWaterModel
}