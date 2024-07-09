import Failure from "../../../domain/failure/failure";
import FailureMapperUtil from "../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../sql/database_pool.sql";
import PatchDataDataSourceParams from "./interface/patch_data_data_source.params";

export default async function patchData({
    authModel,
    table,
    data,
}: PatchDataDataSourceParams): Promise<void | Failure> {
    try {
        const { id, ...updatedData } = data;
        updatedData.updated_at = new Date().toISOString();
        updatedData.updated_by = authModel.userId;

        const columnNames = Object.keys(updatedData)
            .map(key => `${key} = ?`)
            .join(', ');

        const params = Object.values(updatedData).concat(id);

        const query = `UPDATE ${authModel.accountCode}.${table} SET ${columnNames} WHERE id = ?;`;

        await SqlQuery(query, params);
    } catch (error) {
        return FailureMapperUtil(error);
    }
}
