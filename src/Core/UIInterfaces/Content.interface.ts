import { MockUser } from "src/Domain/Model/MockUser";

export interface DataCategoryItemInterface {
    image?: string;
    label: string;
    data: string;
    unit: React.ReactNode;
    icon?: React.ReactNode;
}

// DASH BOARD
export interface RightDashboardButtonInterface {
    label: string;
    icon: React.ReactNode;
}

export interface RightDashboardAnnouncementInterface {
    tag: React.ReactNode;
    label: string;
}

// LIST SEARCH TABLE ITEM INTERFACE
export interface ListSearchTableItem {
    collectionId: string;
    collectionName: string;
    contentGenre: "Video" | "Image";
    filterMethod: string;
    contentQuantity: number;
    creationTime: string;
    status: "ok" | "not ok";
}

// MOCK USER TABLE
export type MockUserTableItem = Pick<
    MockUser,
    "id" | "user_name" | "email" | "status_label" | "group_list"
>;

// MOCK USER FILTER
export interface MockUserFilterProp {
    searchValue: string;
}

// DRAWER INTERFACE
export interface MockUserDrawerDataInterface {
    label?: React.ReactNode;
    value?: React.ReactNode;
}

// MESSAGE STATUS TYPE
export type MessageStatusType =
    | "normal"
    | "info"
    | "success"
    | "warning"
    | "error";

// LIST CARD - SERVICE OPENING INTERFACE
export interface ServiceOpeningInterface {
    title: string;
    content: string;
    status: "none" | "expire" | "opened";
}

// LIST CARD - RULE PRESET INTERFACE
export interface RulePresetInterface {
    title: string;
    content: string;
    status: "none" | "activated";
}

// LOGIN FORM VALUES INTERFACE
export interface LoginFormValuesInterface {
    user_name: string;
    pass_word: string;
    isSavePassword: boolean;
}

export interface PublicOpinionAnalysisInterface {
    title: string;
    amount: number;
    todayChange: number;
    chart?: React.ReactNode;
}

// GROUPFORM PARAMETER ITEM PROPS
export interface GroupFormParameterItemPropsInterface {
    label: string;
    placeholder: string;
    before?: React.ReactNode;
    after?: React.ReactNode;
    options?: string[];
}
