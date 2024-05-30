import { AuthRepository } from "src/Domain/Repository/AuthRepository";
import AuthDataSource from "src/Data/DataSource/AuthDataSource";
import {
    UserLoginRequestData,
    UserLoginResponseData,
} from "src/Domain/Model/User";

export class AuthRepositoryImpl implements AuthRepository {
    private datasource: AuthDataSource;

    constructor(_datasource: AuthDataSource) {
        this.datasource = _datasource;
    }

    async login(
        url: string,
        userLoginRequestData: UserLoginRequestData
    ): Promise<UserLoginResponseData> {
        return this.datasource.login(url, userLoginRequestData);
    }
}
