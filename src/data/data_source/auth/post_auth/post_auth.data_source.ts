import AuthFailure from "../../../../domain/failure/auth/auth.failure";
import Failure from "../../../../domain/failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import AuthResponseModel from "../../../model/auth/auth_response.model";

import PostAuthDataSourceParams from "./interface/post_auth_data_source.params";

export default async function PostAuthDataSource({ email, password, accountCode }: PostAuthDataSourceParams): Promise<AuthResponseModel | Failure> {
    try {
        const query = `SELECT id, first_name, last_name, email from ${accountCode}.admin_users WHERE email = ? AND password = ?`
        const params = [email, password]

        const result = await SqlQuery(query, params)

        if (result.length === 0) {
            return new AuthFailure();
        }
        const user = result.pop()

        return new AuthResponseModel(
            user.id,
            user.firstname,
            user.lastname,
            user.email,
            accountCode
        )
    } catch (error) {
        return FailureMapperUtil(error)
    }
}