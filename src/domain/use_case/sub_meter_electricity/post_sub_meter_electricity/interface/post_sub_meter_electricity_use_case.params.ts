import AuthModel from "../../../../../data/model/auth/auth.model"
import SubMeterElectricityModel from "../../../../../data/model/sub_meter/sub_meter_electricity.model"

export default interface PostSubMeterElectricityUseCaseParams {
    authModel: AuthModel
    subMeterElectricityEntity: SubMeterElectricityModel
}