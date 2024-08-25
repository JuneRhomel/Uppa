import AuthModel from "../../../../model/auth/auth.model"
import SubMeterElectricityModel from "../../../../model/sub_meter/sub_meter_electricity.model"

export default interface PostSubMeterElectricityDataSourceParams {
    authModel: AuthModel
    subMeterElectricityModel: SubMeterElectricityModel
}