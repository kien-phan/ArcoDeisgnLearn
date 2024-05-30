import {
    UserLoginRequestData,
    UserLoginResponseData,
} from "src/Domain/Model/User";
import { AuthRepository } from "src/Domain/Repository/AuthRepository";

export interface LoginUseCaseInterface {
    invoke: (
        url: string,
        userLoginRequestData: UserLoginRequestData
    ) => Promise<UserLoginResponseData>;
}

export class LoginUseCase implements LoginUseCaseInterface {
    private authRepo: AuthRepository;

    constructor(_authRepo: AuthRepository) {
        this.authRepo = _authRepo;
    }

    async invoke(
        url: string,
        userLoginRequestData: UserLoginRequestData
    ): Promise<UserLoginResponseData> {
        return this.authRepo.login(url, userLoginRequestData);
    }
}
