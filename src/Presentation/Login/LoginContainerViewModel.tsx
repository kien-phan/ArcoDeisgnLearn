import { URLS } from "src/Core";
import AuthDataSourceImpl from "src/Data/DataSource/Api/AuthDataSourceImpl";
import { AuthRepositoryImpl } from "src/Data/Repository/AuthRepositoryImpl";
import { UserLoginRequest } from "src/Domain/Model/User";
import { LoginUseCase } from "src/Domain/UseCase/Auth/Login";

function LoginContainerViewModel() {
    // DATASOURCE
    const authDataSourceImpl = new AuthDataSourceImpl();

    // REPOSITORY
    const authRepositoryImpl = new AuthRepositoryImpl(authDataSourceImpl);

    // USE CASES
    const loginUseCase = new LoginUseCase(authRepositoryImpl);

    // HANDLE
    const handleLogin = async (userLoginRequest: UserLoginRequest) => {
        const userResp = await loginUseCase.invoke(
            URLS?.LOGIN,
            userLoginRequest
        );
        return userResp;
    };

    return { handleLogin };
}

export default LoginContainerViewModel;
