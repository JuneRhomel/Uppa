export default interface PatchUserDataSourceParams {
    id: number;
    firstname?: string;
    lastname?: string;
    email?: string;
    is_active?: number;
}