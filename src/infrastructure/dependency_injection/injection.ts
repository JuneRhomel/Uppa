import { createContainer, InjectionMode } from "awilix";
import RegisterHandler from "./register_handler";
import RegisterDataSource from "./register_data_source";
import RegisterUseCase from "./register_use_case";

export default function Injection() {
    const container = createContainer({
        injectionMode: InjectionMode.PROXY,
    });

    RegisterHandler(container);
    RegisterUseCase(container);
    RegisterDataSource(container);

    return container;
}
