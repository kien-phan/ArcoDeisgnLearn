import { Button, Checkbox, Form, Input, Space } from "@arco-design/web-react";
import { useNavigate } from "react-router-dom";

import { FORMRULEMESSAGES, ROUTES } from "src/Core";
import { loginUser } from "src/Data/DataSource/Api/LocalDB/Slices/AuthSlice";
import {
    useAppDispatch,
    useAppSelector,
} from "src/Data/DataSource/Api/LocalDB/reduxHooks";
import useViewModel from "../LoginContainerViewModel";
import { decrypt, encrypt, showMessage } from "src/Core/Helpers";
import { useState } from "react";

function LoginForm() {
    // LOADING
    const [loading, setLoading] = useState(false);

    // VIEWMODEL
    const { handleLogin } = useViewModel();

    // NAVIGATE
    const navigate = useNavigate();

    // REDUX
    const user = useAppSelector((state) => state?.auth?.user);
    const dispatch = useAppDispatch();

    // HANDLE SUBMIT
    const handleSubmit = async (values: any) => {
        setLoading(true);
        const userResp = await handleLogin({
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
            showMessage("error", userResp?.message);
        }
        setLoading(false);
    };

    return (
        <div className="bg-[color:var(--color-white)] p-8 rounded-2xl shadow-xl">
            <div className="flex flex-col justify-start items-center">
                <div className="flex flex-row justify-center items-center">
                    <h2 className="text-xl font-bold mb-8">
                        Login to your account
                    </h2>
                </div>
                <div>
                    <Form
                        layout="vertical"
                        className="flex flex-col justify-start items-center gap-2 flex-wrap"
                        onSubmit={handleSubmit}
                        initialValues={{
                            user_name: decrypt(user?.user_name),
                            pass_word: decrypt(user?.pass_word),
                            isSavePassword: user?.isSavePassword,
                        }}
                    >
                        <Form.Item
                            label="Username"
                            field="user_name"
                            className="[&_.arco-input]:rounded-md justify-center w-full"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        FORMRULEMESSAGES?.LOGIN
                                            ?.USERNAME_REQUIRED,
                                },
                                {
                                    minLength: 6,
                                    message:
                                        FORMRULEMESSAGES?.LOGIN
                                            ?.PASSWORD_MINLENGTH,
                                },
                                {
                                    maxLength: 16,
                                    message:
                                        FORMRULEMESSAGES?.LOGIN
                                            ?.USERNAME_MAXLENGTH,
                                },
                            ]}
                        >
                            <Input
                                className="flex-1 w-full"
                                size="large"
                                placeholder="Enter Username"
                                type="text"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            field="pass_word"
                            className="[&_.arco-input-inner-wrapper]:rounded-md justify-center"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        FORMRULEMESSAGES?.LOGIN
                                            ?.PASSWORD_REQUIRED,
                                },
                                {
                                    minLength: 6,
                                    message:
                                        FORMRULEMESSAGES.LOGIN
                                            ?.PASSWORD_MINLENGTH,
                                },
                                {
                                    maxLength: 16,
                                    message:
                                        FORMRULEMESSAGES?.LOGIN
                                            ?.PASSWORD_MAXLENGTH,
                                },
                            ]}
                        >
                            <Input.Password
                                className="w-[350px]"
                                size="large"
                                defaultVisibility={false}
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item className="flex flex-row justify-end items-center">
                            <Space className="flex flex-row flex-wrap justify-center md:justify-between items-center">
                                <Form.Item
                                    className="flex flex-row m-0 justify-center items-center"
                                    defaultChecked
                                    field="isSavePassword"
                                    triggerPropName="checked"
                                >
                                    <Checkbox className="text-xs md:text-sm">
                                        {({
                                            checked,
                                        }: {
                                            checked: boolean;
                                        }) => {
                                            return (
                                                <div className="flex flex-row items-center gap-STANDARDMARGINANDPADDING">
                                                    <div className="w-3 h-3 inline-flex items-center justify-center rounded-sm border border-solid border-black">
                                                        <div
                                                            className={`${
                                                                checked &&
                                                                "bg-black"
                                                            } w-2 h-2 rounded-sm`}
                                                        ></div>
                                                    </div>
                                                    <span>Save Password</span>
                                                </div>
                                            );
                                        }}
                                    </Checkbox>
                                </Form.Item>
                            </Space>
                        </Form.Item>
                        <Form.Item className="justify-center m-0">
                            <Button
                                className="w-full h-10 !rounded-xl !bg-black"
                                type="primary"
                                htmlType="submit"
                                disabled={loading}
                            >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
