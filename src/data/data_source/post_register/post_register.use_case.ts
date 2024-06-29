import Failure from "../../../domain/failure/failure";
import FailureMapperUtil from "../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../sql/database_pool.sql";
import PostRegisterParams from "./interface/post_register_use_case.params";

export default async function PostRegisterDataSource({ authModel, userEntity }: PostRegisterParams): Promise<void | Failure> {
    try {
        userEntity.createdAt = new Date().toISOString()

        const query = `INSERT INTO uppa_accounts.account 
            firstname = ?,
            lastname = ?,
            email = ?,
            password = ?,
            account_code = ?,
            created_at = ?

        `
        const params = [
            userEntity.firstname,
            userEntity.lastname,
            userEntity.email,
            userEntity.password,
            authModel.accountCode,
            userEntity.createdAt
        ]

        await SqlQuery(query, params)
    } catch (error) {
        return FailureMapperUtil(error)
    }
}