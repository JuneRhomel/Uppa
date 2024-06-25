import AuthModel from "../../../../../data/model/auth/auth.model";
import PaginationEntity from "../../../../entity/panigation.entity";

export default interface GetUnitUseCaseParams {
    paginationEntity: PaginationEntity;
    authModel: AuthModel;
}