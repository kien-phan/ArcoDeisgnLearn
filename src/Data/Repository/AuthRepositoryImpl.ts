import { AuthRepository } from "src/Domain/Repository/AuthRepository";
import AuthDataSource from "src/Data/DataSource/AuthDataSource";
import { UserLoginRequest, UserLoginResponse } from "src/Domain/Model/User";

export class AuthRepositoryImpl implements AuthRepository {
    private datasource: AuthDataSource;

    constructor(_datasource: AuthDataSource) {
        this.datasource = _datasource;
    }

    async login(url: string, userLoginRequest: UserLoginRequest): Promise<UserLoginResponse> {
        return this.datasource.login(url, userLoginRequest)
    }
}
