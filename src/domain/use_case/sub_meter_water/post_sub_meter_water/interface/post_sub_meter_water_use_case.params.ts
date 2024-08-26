import AuthModel from "../../../../../data/model/auth/auth.model";
import SubMeterWaterEntity from "../../../../entity/sub_meter/sub_meter_water.entity";

export default interface PostSubMeterUseCaseParams {
    authModel: AuthModel,
    subMeterWaterEntity: SubMeterWaterEntity
}