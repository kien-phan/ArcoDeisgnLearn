import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { TANSTACKMUTATIONKEYS, URLS } from "src/Core";
import { ROUTES } from "src/Core";
import { loginUser } from "src/Data/DataSource/Api/LocalDB/Slices/AuthSlice";
import {
    useAppDispatch,
    useAppSelector,
} from "src/Data/DataSource/Api/LocalDB/reduxHooks";
import { encrypt } from "src/Core/Helpers";

import AuthDataSourceImpl from "src/Data/DataSource/Api/AuthDataSourceImpl";
import { AuthRepositoryImpl } from "src/Data/Repository/AuthRepositoryImpl";
import { UserLoginRequest } from "src/Domain/Model/User";
import { LoginUseCase } from "src/Domain/UseCase/Auth/Login";

function LoginViewModel() {
    // DATASOURCE
    const authDataSourceImpl = new AuthDataSourceImpl();

    // REPOSITORY
    const authRepositoryImpl = new AuthRepositoryImpl(authDataSourceImpl);

    // USE CASES
    const loginUseCase = new LoginUseCase(authRepositoryImpl);

    // STATE
    const [messageErr, setMessageErr] = useState("");

    // NAVIGATE
    const navigate = useNavigate();

    // REDUX
    const user = useAppSelector((state) => state?.auth?.user);
    const dispatch = useAppDispatch();

    // USE MUTATION
    const loginMutation = useMutation({
        mutationKey: [TANSTACKMUTATIONKEYS.LOGIN],
        mutationFn: (userLoginRequest: UserLoginRequest) =>
            loginUseCase.invoke(URLS?.LOGIN, userLoginRequest),
    });

    // HANDLE FOCUS INPUT
    const handleFocusInput = () => {
        setMessageErr("");
    };

    // HANDLE SUBMIT
    const handleSubmit = async (values: any) => {
        const userResp = await loginMutation.mutateAsync({
            user_name: values?.user_name,
            pass_word: values?.pass_word,
        });

        if (userResp.success) {
            dispatch(
                loginUser({
                    ...userResp,
                    data: {
                        ...userResp?.data,
                        token: encrypt(userResp?.data?.token),
                    },
                    isSavePassword: values?.isSavePassword ? true : false,
                    user_name: values?.isSavePassword
                        ? encrypt(values?.user_name)
                        : "",
                    pass_word: values?.isSavePassword
                        ? encrypt(values?.pass_word)
                        : "",
                })
            );
            navigate(ROUTES?.DASHBOARD);
        } else {
            setMessageErr(userResp?.message);
        }
    };

    return { loginMutation, handleSubmit, user, messageErr, handleFocusInput };
}

export default LoginViewModel;
