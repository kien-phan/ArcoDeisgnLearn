import { UserLoginRequest, UserLoginResponse } from "src/Domain/Model/User";

export default interface AuthDataSource {
    login(url: string, userLoginRequest: UserLoginRequest): Promise<UserLoginResponse>
}
