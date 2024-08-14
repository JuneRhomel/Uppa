import DeleteTenantDataSource from "../../../../data/data_source/tenant/delete_tenant/delete_tenant.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import Failure from "../../../failure/failure";
import DeleteTenantUseCaseParams from "./interface/delete_tenant_use_case.params";

export default async function DeleteTenantUseCase({ authModel, id }: DeleteTenantUseCaseParams): Promise<Failure | void> {
    try {
        return await DeleteTenantDataSource({ authModel, id });
    } catch (error) {
        return FailureMapperUtil(error);
    }
}