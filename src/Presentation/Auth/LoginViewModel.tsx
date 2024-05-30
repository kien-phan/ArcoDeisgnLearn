import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";

import {
    LoginFormValuesInterface,
    TANSTACKMUTATIONKEYS,
    loginRequest,
} from "src/Core";
import { ROUTES } from "src/Core";
import { loginUser } from "src/Data/DataSource/Api/LocalDB/Slices/AuthSlice";
import {
    useAppDispatch,
    useAppSelector,
} from "src/Data/DataSource/Api/LocalDB/reduxHooks";
import { encrypt } from "src/Core/Helpers";
import {
    User,
    UserLoginRequestData,
    UserLoginResponseData,
} from "src/Domain/Model/User";

function LoginViewModel() {
    // STATE
    const [messageErr, setMessageErr] = useState("");

    // NAVIGATE
    const navigate = useNavigate();

    // REDUX
    const user = useAppSelector((state) => state?.auth?.user);
    const dispatch = useAppDispatch();

    // HANDLE FOCUS INPUT
    const handleFocusInput = () => {
        setMessageErr("");
    };

    // USE MUTATION
    const loginMutation = useMutation({
        mutationKey: [TANSTACKMUTATIONKEYS.LOGIN],
        mutationFn: (userLoginRequestData: UserLoginRequestData) =>
            loginRequest(userLoginRequestData),
    });

    // HANDLE SUBMIT
    const handleSubmit = async (values: LoginFormValuesInterface) => {
        await loginMutation.mutateAsync(
            {
                user_name: values?.user_name || "",
                pass_word: values?.pass_word || "",
            },
            {
                onSuccess: (_data) => {
                    console.log(_data);

                    if (_data?.success) {
                        const realData = _data?.data as UserLoginResponseData;

                        const newUser: User = {
                            ...realData,
                            data: {
                                ...realData?.data,
                                token: encrypt(realData?.data?.token),
                            },
                            isSavePassword: values?.isSavePassword
                                ? true
                                : false,
                            user_name: values?.isSavePassword
                                ? encrypt(realData?.data.user_info.user_name)
                                : "",
                            pass_word: values?.isSavePassword
                                ? encrypt(values?.pass_word)
                                : "",
                        };

                        dispatch(loginUser(newUser));
                        navigate(ROUTES?.DASHBOARD);
                    } else {
                        console.log(_data);

                        setMessageErr(_data?.errorMsg!);
                    }
                },
            }
        );
    };

    return { loginMutation, handleSubmit, user, messageErr, handleFocusInput };
}

export default LoginViewModel;
