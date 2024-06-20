import GetUserDataSourceParams from "./get_suer_data_source.params";

export default interface GetUserDataSourceInterface {
    (params: GetUserDataSourceParams): Promise<any>;
}