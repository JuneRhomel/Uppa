import { AwilixContainer, asFunction } from "awilix";
import GetUsersDataSource from "../../data/data_source/get_users/get_user.data_source";

export default function RegisterDataSource(container: AwilixContainer) {
    container.register({
        getUserDataSource: asFunction(GetUsersDataSource),
    });
}