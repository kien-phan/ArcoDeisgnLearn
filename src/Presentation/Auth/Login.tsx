import { Button, Checkbox, Form, Input, Space } from "@arco-design/web-react";
import useViewModel from "./LoginViewModel";
import { FORMRULEMESSAGES, decrypt } from "src/Core";

function Login() {
    const { handleSubmit, handleFocusInput, loginMutation, messageErr, user } =
        useViewModel();

    return (
        // <div className="bg-[color:var(--color-white)] p-8 rounded-2xl shadow-xl">
        <div className="p-8 mb-4 w-3/4 lg:w-1/3 max-w-[520px] flex flex-col justify-start items-center bg-[color:var(--color-bg-1)] rounded-2xl shadow-xl">
            <div className="flex flex-row justify-center items-center">
                <h2 className="text-xl font-bold mb-4">Login</h2>
            </div>
            <div className="flex flex-row">
                <div className="h-[37px]"></div>
                <span className="text-red-400 my-2">{messageErr}</span>
            </div>
            <div className="w-full">
                <Form
                    layout="vertical"
                    className="flex flex-col justify-start items-center gap-2 flex-wrap w-full"
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
                                    FORMRULEMESSAGES?.LOGIN?.USERNAME_REQUIRED,
                            },
                            {
                                minLength: 6,
                                message:
                                    FORMRULEMESSAGES?.LOGIN?.PASSWORD_MINLENGTH,
                            },
                            {
                                maxLength: 16,
                                message:
                                    FORMRULEMESSAGES?.LOGIN?.USERNAME_MAXLENGTH,
                            },
                        ]}
                    >
                        <Input
                            onFocus={handleFocusInput}
                            className="flex-1 w-full"
                            size="large"
                            placeholder="Enter Username"
                            type="text"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        field="pass_word"
                        className="[&_.arco-input-inner-wrapper]:rounded-md justify-center w-full"
                        rules={[
                            {
                                required: true,
                                message:
                                    FORMRULEMESSAGES?.LOGIN?.PASSWORD_REQUIRED,
                            },
                            {
                                minLength: 6,
                                message:
                                    FORMRULEMESSAGES.LOGIN?.PASSWORD_MINLENGTH,
                            },
                            {
                                maxLength: 16,
                                message:
                                    FORMRULEMESSAGES?.LOGIN?.PASSWORD_MAXLENGTH,
                            },
                        ]}
                    >
                        <Input.Password
                            className="w-full"
                            size="large"
                            defaultVisibility={false}
                            placeholder="Password"
                            onFocus={handleFocusInput}
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
                                    Save Password
                                </Checkbox>
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item className="justify-center m-0">
                        <Button
                            className="w-full h-10 !rounded-xl !bg-[color:var(--color-menu-dark-bg)]"
                            type="primary"
                            htmlType="submit"
                            disabled={loginMutation.isLoading}
                            loading={loginMutation.isLoading}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
        // </div>
    );
}

export default Login;
