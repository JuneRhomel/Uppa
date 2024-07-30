import GetTotalListRowsDataSource from "../../../../data/data_source/core/get_total_list_rows/get_total_list_rows.data_source";
import GetTenantListDataSource from "../../../../data/data_source/tenant/get_tenant_list/get_tenant_list.data_source";
import PaginationModel from "../../../../data/model/panigation/panigation.model";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import TenantModel from "../../../entity/tenent/tenant.entity";
import TenantListEntity from "../../../entity/tenent/tenant_list.entity";
import Failure from "../../../failure/failure";
import GetTenantListUseCaseParams from "./interface/get_tenant_list_use_case.params"
import { plainToInstance } from "class-transformer";


export default async function GetTenantListUseCase({ authModel, paginationEntity }: GetTenantListUseCaseParams): Promise<Failure | TenantListEntity> {
    try {
        const { search, filters, page, numberOfRows, columns, sortBy, sortOrder } =
            paginationEntity;
        const destructureColumns = columns ? columns.split(",") : [];
        const destructureFilters = filters ? filters.split(",") : [];


        const paginationModel = plainToInstance(PaginationModel, {
            search,
            page,
            numberOfRows,
            columns: destructureColumns,
            sortBy,
            sortOrder,
            filters: destructureFilters,
        });

        const totalRows = await GetTotalListRowsDataSource({
            database: authModel.accountCode,
            table: "tenant",
        });
        const tenants = await GetTenantListDataSource({ paginationModel, authModel });
        if (totalRows instanceof Failure) {
            return totalRows;
        }

        if (tenants instanceof Failure) {
            return tenants;
        }

        const tenantEntity = plainToInstance(TenantModel, tenants, {
            excludeExtraneousValues: true,
        });

        return new TenantListEntity(tenantEntity, totalRows);
    } catch (error) {
        return FailureMapperUtil(error)
    }
}