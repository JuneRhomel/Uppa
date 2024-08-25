import AuthModel from "../../../../model/auth/auth.model";
import PaginationModel from "../../../../model/panigation/panigation.model";

export default interface GetMotherMeterElectricityListDataSourceParams {
    authModel: AuthModel;
    paginationModel: PaginationModel
}