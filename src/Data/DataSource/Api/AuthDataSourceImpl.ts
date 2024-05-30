import Http from "src/Core/ApiClientAxios/Http";
import AuthDataSource from "src/Data/DataSource/AuthDataSource";
import {
    UserLoginRequestData,
    UserLoginResponseData,
} from "src/Domain/Model/User";

export default class AuthDataSourceImpl extends Http implements AuthDataSource {
    constructor() {
        super();
    }
    async login(
        url: string,
        userLoginRequestData: UserLoginRequestData
    ): Promise<UserLoginResponseData> {
        const { data } = await this.post(`${url}`, userLoginRequestData);
        return data;
    }
}
