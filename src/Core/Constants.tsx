import {
    IconDashboard,
    IconList,
    IconSettings,
    IconUser,
} from "@arco-design/web-react/icon";

import Dashboard from "src/Presentation/Dashboard";
import ListSearchTable from "src/Presentation/ListSearchTable";
import { LeftMenuInterface, translate } from "src/Core";
import Login from "src/Presentation/Auth/Login";
import Register from "src/Presentation/Auth/Register";
import ListUserManage from "src/Presentation/ListUserManage";
import UserSetting from "src/Presentation/UserSetting";
import FormContainer from "src/Presentation/Form/FormContainer";
import UserInfoContainer from "src/Presentation/UserInfo/UserInfoContainer";
import ListCard from "src/Presentation/ListCard";

// ROUTES
export const AUTHROUTE = "/auth";
export const ROUTES = {
    DASHBOARD: "/dashboard",
    LIST: {
        USER_MANAGE: "/list/user-manage",
        SEARCH_TABLE: "/list/search-table",
        LIST_CARD: "/list/card-list",
    },
    FORM: "/form",
    USER: {
        USER_SETTING: "/user/user-setting",
        USER_INFO: "/user/user-info",
    },
    ROOT: "/",
    LOGIN: AUTHROUTE + "/login",
    REGISTER: AUTHROUTE + "/register",
};

// URLs
export const BASE_URL = "https://sys.api.dev.adsai.asia/api";
export const URLS = {
    LOGIN: BASE_URL + ROUTES.LOGIN,
};

// PRIVATE ROUTE
export const PRIVATE_ROUTE = [
    { path: ROUTES.DASHBOARD, element: <Dashboard /> },
    { path: ROUTES.LIST.USER_MANAGE, element: <ListUserManage /> },
    { path: ROUTES.LIST.SEARCH_TABLE, element: <ListSearchTable /> },
    { path: ROUTES.LIST.LIST_CARD, element: <ListCard /> },
    { path: ROUTES.USER.USER_SETTING, element: <UserSetting /> },
    { path: ROUTES.USER.USER_INFO, element: <UserInfoContainer /> },
    { path: ROUTES.FORM, element: <FormContainer /> },
];

// PUBLIC ROUTE
export const PUBLIC_ROUTE = [
    { path: ROUTES.ROOT, element: <Login /> },
    {
        path: ROUTES.LOGIN,
        element: <Login />,
    },
    {
        path: ROUTES.REGISTER,
        element: <Register />,
    },
];

// MENU DATAS
export const GetLeftMenuDatas = (locale: string) => {
    const data: LeftMenuInterface[] = [
        {
            key: "dashboard",
            icon: <IconDashboard className="text-xl" />,
            label: translate("dashboard", locale),
            path: ROUTES.DASHBOARD,
        },
        {
            key: "list",
            icon: <IconList className="text-xl" />,
            label: translate("list.list", locale),
            subList: [
                {
                    key: "user-manage",
                    label: translate("list.userManage", locale),
                    path: ROUTES.LIST.USER_MANAGE,
                },
                {
                    key: "search-table",
                    label: translate("list.searchTable", locale),
                    path: ROUTES.LIST.SEARCH_TABLE,
                },
                {
                    key: "list-card",
                    label: translate("list.listCard", locale),
                    path: ROUTES.LIST.LIST_CARD,
                },
            ],
        },
        {
            key: "form",
            label: translate("form", locale),
            icon: <IconSettings className="text-xl" />,
            path: ROUTES?.FORM,
        },
        {
            key: "user",
            label: translate("userPages.userCenter", locale),
            icon: <IconUser className="text-xl" />,
            subList: [
                {
                    key: "user-setting",
                    label: translate("userPages.userSetting", locale),
                    path: ROUTES.USER.USER_SETTING,
                },
                {
                    key: "user-info",
                    label: translate("userPages.userInfo", locale),
                    path: ROUTES.USER.USER_INFO,
                },
            ],
        },
    ];
    return data;
};

// FORM RULE MESSAGES
export const FORMRULEMESSAGES = {
    LOGIN: {
        USERNAME_REQUIRED: "Username is required",
        USERNAME_MAXLENGTH: "Username must has less than 16 characters",
        USERNAME_MINLENGTH: "Username must has at least 6 characters",
        PASSWORD_REQUIRED: "Password is required",
        PASSWORD_MINLENGTH: "Password must has at least 6 characters",
        PASSWORD_MAXLENGTH: "Password must has less than 16 characters",
    },
};

// ASSET FILE PATHs
export const ASSETFILEPATHS = {
    USERLISTMOCKDATA: "/userList.json",
};

// ELEMENT_ID
export const ELEMENT_ID = {
    HEADER: "headerElementId",
    FOOTER: "footerElementId",
    SIDER: "siderElementId",
    BREADCRUMB: "breadcrumbElementId",
    TABLEFILTER: "tableFilterElementId",
    TABLE: "userManageTableContainer",
    CERTIFICATIONRECORDSTABLE: "certificationRecordsTable",
    USERSETTINGINFO: "userSettingInfo",
    USERSETTINGTABCONTAINER: "userSettingTabContainer",
};
// TANSTACK QUERY KEYS
export const TANSTACKQUERYKEYS = {
    MOCKUSERS: "mockUsers",
};

export const TANSTACKMUTATIONKEYS = {
    LOGIN: "login",
};

// MOCKUSER STATUS
export const MOCKUSERSTATUS = {
    ACTIVE: "Active",
    LOCKED: "Locked",
};

// STEPFORM SCREEN STR
export const STEPFORMSTR = {};

// MESSAGE STATUS
export const MESSAGESTATUS = {
    NORMAL: "normal",
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
} as const;
