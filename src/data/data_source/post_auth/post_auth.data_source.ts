import Failure from "../../../domain/failure/failure";
import SqlQuery from "../../../sql/database_pool.sql";
import AuthResponseModel from "../../model/auth/auth_response.model";

import PostAuthDataSourceParams from "./interface/post_auth_data_source.params";

export default async function PostAuthDataSource({ email, password, accountCode }: PostAuthDataSourceParams): Promise<AuthResponseModel | Failure> {
    try {
        const query = `SELECT id, firstname, lastname, email, account_code from uppa_accounts.account WHERE email = ? AND password = ? AND account_code = ?`
        const params = [email, password, accountCode]

        const result = await SqlQuery(query, params)
        
        if (result.length === 0) {
            return new Failure('Invalid email or password', null, 400);
        }
        const user = result.pop()

        return new AuthResponseModel(
            user.id,
            user.firstname,
            user.lastname,
            user.email,
            user.account_code
        )
    } catch (error) {
        return new Failure('Failed to post data', error, 500);
    }
}