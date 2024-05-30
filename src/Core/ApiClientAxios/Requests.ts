import { UserLoginRequestData } from "src/Domain/Model/User";
import { connectAPI, handleAPIResponse } from "./AxiosHandle";

export const loginRequest = async (request: UserLoginRequestData) =>
    handleAPIResponse(
        await connectAPI({ method: "POST", path: "/auth/login", body: request })
    );
