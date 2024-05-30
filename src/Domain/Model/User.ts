// USER REQUEST
export interface UserLoginRequestData {
    user_name: string;
    pass_word: string;
}

// USER RES
export interface StatusLabel {
    value: number;
    text: string;
    label: string;
}

export interface PositionLabel {
    value: number;
    text: string;
    label: string;
}

export interface UserInfo {
    id: number;
    user_name: string;
    full_name: string;
    email: string;
    status: string;
    status_label: StatusLabel;
    position: string;
    position_label: PositionLabel;
    is_create_tiktok_account: boolean;
    is_share_tiktok_pixel: boolean;
}

export interface Data {
    token: string;
    user_info: UserInfo;
}

export interface UserLoginResponseData {
    data: Data;
    success: boolean;
    code: number;
    message: string;
    version: string;
}

export interface User extends UserLoginResponseData {
    isSavePassword: boolean;
    pass_word?: string;
    user_name?: string;
}
