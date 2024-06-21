import PatchDataDataSource from "../../../data/data_source/patch_data/patch_data.data_source";
import Failure from "../../failure/failure";
import PatchUserDataSourceParams from "./interface/patch_user_use_case.params";

export default async function PatchUserUseCase(params: PatchUserDataSourceParams): Promise<void | Failure> {
    try {
        await PatchDataDataSource({
            database: "uppa_accounts",
            table: "account",
            data: {
                firstname: params.firstname,
                lastname: params.lastname,
                email: params.email,
                is_active: params.is_active
            },
            id: params.id
        })

    } catch (error) {
        return new Failure("Failed in patch user use case", error, 500);
    }
}