import { UserLoginRequest, UserLoginResponse } from "src/Domain/Model/User";

export interface AuthRepository {
    login(url: string, userLoginRequest: UserLoginRequest): Promise<UserLoginResponse>;
}
