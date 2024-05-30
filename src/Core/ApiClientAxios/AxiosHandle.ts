import axios, { AxiosHeaders, AxiosResponse } from "axios";
import { BASE_URL } from "../Constants";

// REQUEST HEADER
const includeFomData = (headers?: AxiosHeaders, isMultiPart = false) => {
    return {
        ...headers,
        ...(isMultiPart ? { "Content-Type": "multipart/form-data" } : null),
    };
};

// CONNECT API
export const connectAPI = async ({
    method,
    path,
    body,
    headers,
    isMultipart = false,
}: {
    method: string;
    path: string;
    body: object | FormData;
    headers?: AxiosHeaders;
    isMultipart?: boolean;
}) => {
    const response = await axios({
        method,
        url: BASE_URL + path,
        headers: includeFomData(headers, isMultipart),
        data: body,
    });
    return response;
};

// HANDLE RESPONSE FROM AXIOS
export const handleAPIResponse = (response: AxiosResponse<any, any>) => {
    if (response && response.status >= 200 && response.status < 300) {
        return {
            success: true,
            data: response.data,
        };
    } else {
        let errorMsg = "Unknown error";
        if (response && response.data && response.data?.message) {
            errorMsg = response?.data?.message;
        } else if (response && response.statusText) {
            errorMsg = response.statusText;
        }
        return {
            success: false,
            errorMsg: errorMsg,
        };
    }
};
