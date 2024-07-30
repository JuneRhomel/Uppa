import AuthModel from "../../../../../data/model/auth/auth.model";
import PaginationEntity from "../../../../entity/pagination/panigation.entity";

export default interface GetTenantListUseCaseParams {
    authModel: AuthModel
    paginationEntity: PaginationEntity
}