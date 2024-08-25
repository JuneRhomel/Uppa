import AuthModel from "../../../../../data/model/auth/auth.model"
import SubMeterElectricityModel from "../../../../../data/model/sub_meter/sub_meter_electricity.model"

export default interface PatchSubMeterElectricityUseCaseParams {
    authModel: AuthModel
    subMeterElectricityEntity: SubMeterElectricityModel
}