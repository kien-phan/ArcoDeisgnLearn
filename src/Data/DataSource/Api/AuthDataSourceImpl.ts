import Http from "src/Core/ApiClientAxios/Http";
import AuthDataSource from "src/Data/DataSource/AuthDataSource";
import { UserLoginRequest, UserLoginResponse } from "src/Domain/Model/User";

export default class AuthDataSourceImpl
    extends Http
    implements AuthDataSource
{
    constructor() {
        super();
    }
    async login(url: string, userLoginRequest: UserLoginRequest): Promise<UserLoginResponse> {
        const { data } = await this.post(`${url}`, userLoginRequest);
        return data
    }
}
