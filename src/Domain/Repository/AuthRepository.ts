import {
    UserLoginRequestData,
    UserLoginResponseData,
} from "src/Domain/Model/User";

export interface AuthRepository {
    login(
        url: string,
        userLoginRequestData: UserLoginRequestData
    ): Promise<UserLoginResponseData>;
}
