import {
    UserLoginRequestData,
    UserLoginResponseData,
} from "src/Domain/Model/User";

export default interface AuthDataSource {
    login(
        url: string,
        userLoginRequestData: UserLoginRequestData
    ): Promise<UserLoginResponseData>;
}
