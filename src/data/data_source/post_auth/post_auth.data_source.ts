import Failure from "../../../domain/failure/failure";
import SqlQuery from "../../../sql/database_pool.sql";

import PostAuthDataSourceParams from "./interface/post_auth_data_source.params";

export default async function ({ email, accountCode }: PostAuthDataSourceParams): Promise<any | Failure> {
    try {
        const query = `SELECT id, account_code from uppa_accounts.account WHERE email = ? AND account_code = ?`
        const params = [email, accountCode]

        const result = await SqlQuery(query, params)

        return result
    } catch (error) {
        return new Failure('Failed to post data', error, 500);
    }
}