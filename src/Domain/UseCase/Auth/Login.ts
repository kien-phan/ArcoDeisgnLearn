import { UserLoginRequest, UserLoginResponse } from "src/Domain/Model/User";
import { AuthRepository } from "src/Domain/Repository/AuthRepository";

export interface LoginUseCaseInterface {
    invoke: (url: string, userLoginRequest: UserLoginRequest) => Promise<UserLoginResponse>;
}

export class LoginUseCase implements LoginUseCaseInterface {
    private authRepo: AuthRepository;

    constructor(_authRepo: AuthRepository) {
        this.authRepo = _authRepo;
    }

    async invoke(url: string, userLoginRequest: UserLoginRequest): Promise<UserLoginResponse> {
        return this.authRepo.login(url, userLoginRequest);
    }
}
