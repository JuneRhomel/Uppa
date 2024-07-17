import AuthModel from "../../../../../data/model/auth/auth.model";
import PropertyInfoEntity from "../../../../entity/property_info/property_info.entity";

export default interface PatchropertyUseCaseParams {
    authModel: AuthModel;
    propertyInfoEntity: PropertyInfoEntity
}