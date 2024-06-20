import ApiHandlerParams from "./api_handler.params";

export default interface ApiHandlerInterface {
    (params: ApiHandlerParams): Promise<any>
}