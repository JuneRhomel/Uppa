import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import RegisterDataSourceParams from "./interface/register_data_source.params";

export default async function RegisterDataSource({ registerModel, authModel }: RegisterDataSourceParams) {
    try {
        const sql = `
    INSERT INTO ${authModel.accountCode}.admin_users 
    (first_name, last_name, email, password, contact_number,role_id, is_active, created_at, created_by ) 
    VALUES 
    (?, ?, ?, ?, ?, ?, ?, ?, ?);`;

        const params = [
            registerModel.firstname,
            registerModel.lastname,
            registerModel.email,
            registerModel.password,
            registerModel.contactNumber,
            registerModel.roleId,
            registerModel.isActive,
            registerModel.createdAt,
            authModel.userId,
        ];

        return SqlQuery(sql, params);
    } catch (error) {
        return FailureMapperUtil(error)
    }
}