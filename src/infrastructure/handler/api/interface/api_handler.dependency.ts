import GetUserUseCaseInterface from "../../../../domain/use_case/get_users/interface/get_user_use_case.interface";

export default interface ApiHandlerDependency {
    getUsersUseCase: GetUserUseCaseInterface;
}