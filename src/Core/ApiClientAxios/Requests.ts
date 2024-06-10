import { UserLoginRequestData } from "src/Domain/Model/User";
import { connectAPI, handleAPIResponse } from "./AxiosHandle";
import { METHOD } from "../Constants";

export const loginRequest = async (requestBody: UserLoginRequestData) =>
    handleAPIResponse(
        await connectAPI({
            method: METHOD.POST,
            path: "/auth/login",
            body: requestBody,
        })
    );
