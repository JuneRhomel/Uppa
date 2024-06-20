import GetUserDataSourceDependency from "./interface/get_user_data_source.dependency";
import GetUserDataSourceInterface from "./interface/get_user_data_source.interface";
import {SqlQuery} from "../../../sql/database_pool.sql";

export default function GetUsersDataSource(): GetUserDataSourceInterface {
    return async ({ database, table }) => {
        const [rows]: any = await SqlQuery.query(`SELECT id, name FROM ${database}.${table}`);
        return rows;
    }
}

