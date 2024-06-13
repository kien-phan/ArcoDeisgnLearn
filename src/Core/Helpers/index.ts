import CryptoJS from "crypto-js";
import { Message, MessageProps } from "@arco-design/web-react";

import {
    LeftMenuInterface,
    ListSearchTableItem,
    MESSAGESTATUS,
    MessageStatusType,
    MockUserFilterProp,
} from "src/Core";
import { MockUser } from "src/Domain/Model/MockUser";
import tailwindConfig from "../../../tailwind.config";
import numeral from "numeral";

/***********************
 * BREADCRUMB
 ***********************/

/**
 *  To create breadcrumb from item and its sublist
 *
 */
export function GetBreadCrumbArray(
    items: LeftMenuInterface[],
    targetPath: string
): LeftMenuInterface[] {
    // FOUND ITEMs
    const path: LeftMenuInterface[] = [];

    // CONVERT TARGET PATH FROM STRING TO ARRAY
    const pathArray = targetPath.split("/");

    // FIND
    items.forEach((item) => {
        if (pathArray.includes(item.key.toLowerCase())) {
            path.push(item);
        }

        if (item?.subList) {
            const subListPath = GetBreadCrumbArray(item?.subList, targetPath);
            path.push(...subListPath);
        }
    });

    return path;
}

/**
 * find item: LeftMenuInterface in root item and its sublist to get the item has the key
 */
export function GetMenuItemByKey(
    key: string,
    menuItems: LeftMenuInterface[]
): LeftMenuInterface | undefined {
    // FIND LEVEL 1
    const foundItem = menuItems.find(
        (item) => item.key.toLowerCase() === key.toLowerCase()
    );
    if (foundItem) {
        return foundItem;
    }

    // FIND IN SUBLIST
    for (const item of menuItems) {
        if (item?.subList) {
            const foundItem = GetMenuItemByKey(key, item.subList);
            if (foundItem) {
                return foundItem;
            }
        }
    }

    return undefined;
}

/***********************
 * LIST SEARCH TABLE
 ***********************/

/**
 *  filter ListSearchTableItem[ ] to get the item by collectionId
 */
export function filterByCollectionId(
    items: ListSearchTableItem[],
    collectionId: string
): ListSearchTableItem[] {
    return collectionId
        ? items.filter((item) => item.collectionId === collectionId)
        : items;
}

/**
 *  filter ListSearchTableItem[] to get the item by collectionName
 */
export function filterByCollectionName(
    items: ListSearchTableItem[],
    collectionName: string
): ListSearchTableItem[] {
    return collectionName
        ? items.filter((item) =>
              item.collectionName
                  .toLowerCase()
                  .includes(collectionName.toLowerCase())
          )
        : items;
}

/**
 *  filter ListSearchTableItem[] to get the item by contentGenre
 */
export function filterByContentGenre(
    items: ListSearchTableItem[],
    contentGenres: string[]
): ListSearchTableItem[] {
    return contentGenres.length > 0
        ? items.filter((item) => contentGenres.includes(item.contentGenre))
        : items;
}

/**
 *  filter ListSearchTableItem[] to get the item by filterMethod
 */
export function filterByFilterMethod(
    items: ListSearchTableItem[],
    filterMethods: string[]
): ListSearchTableItem[] {
    return filterMethods.length > 0
        ? items.filter((item) => filterMethods.includes(item.filterMethod))
        : items;
}

/**
 *  filter ListSearchTableItem[] to get the item by status
 */
export function filterByStatus(
    items: ListSearchTableItem[],
    statuses: string[]
): ListSearchTableItem[] {
    return statuses.length > 0
        ? items.filter((item) => statuses.includes(item.status))
        : items;
}

/**
 *  filter ListSearchTableItem[] to get the item by creationTime
 */
export function filterByCreationTime(
    items: ListSearchTableItem[],
    startDate: string,
    endDate: string
): ListSearchTableItem[] {
    const startTime = new Date(startDate).getTime();
    const endTime = new Date(endDate).getTime();

    return startTime && endTime
        ? items.filter((item) => {
              const creationTime = new Date(item.creationTime).getTime();
              return creationTime >= startTime && creationTime <= endTime;
          })
        : items;
}

/***********************
 * LIST USER MANAGE
 ***********************/

/**
 *  filter user in Mock user list by id + username + email + status + group
 */
export function mockUserFilter(
    items: MockUser[],
    filterData: MockUserFilterProp
): MockUser[] {
    return filterData.searchValue
        ? items.filter((item) => {
              const isId =
                  item.id &&
                  item.id
                      .toString()
                      .toLowerCase()
                      .includes(filterData.searchValue.toLowerCase());
              const isUsername =
                  item.user_name &&
                  item.user_name
                      .toLowerCase()
                      .includes(filterData.searchValue.toLowerCase());
              const isEmail =
                  item.email &&
                  item.email
                      .toLowerCase()
                      .includes(filterData.searchValue.toLowerCase());
              const isStatus =
                  item.status_label.text &&
                  item.status_label.text
                      .toLowerCase()
                      .includes(filterData.searchValue.toLowerCase());
              const isInGroup =
                  item.group_list.length > 0 &&
                  item.group_list.some((group) =>
                      group.name
                          .toLowerCase()
                          .includes(filterData.searchValue.toLowerCase())
                  );

              return isId || isEmail || isInGroup || isStatus || isUsername;
          })
        : items;
}

/***********************
 * COMMON
 ***********************/

/**
 * is device mobile?
 * @returns {boolean}
 */
export function isMobileView(): boolean {
    const maxMobileWidth = parseInt(tailwindConfig?.theme?.screens?.md, 10);

    const isScreenSizeMobile = window?.screen?.width <= maxMobileWidth;

    return isScreenSizeMobile;
}

/**
 *  show arco toast message
 */
export function showMessage(
    status: MessageStatusType,
    config: string | MessageProps
) {
    const messageFunction =
        {
            [MESSAGESTATUS.NORMAL]: Message.normal,
            [MESSAGESTATUS.INFO]: Message.info,
            [MESSAGESTATUS.SUCCESS]: Message.success,
            [MESSAGESTATUS.WARNING]: Message.warning,
            [MESSAGESTATUS.ERROR]: Message.error,
        }[status] || Message.info; // Default to info if status is not recognized

    messageFunction(config);
}

/**
 *  ENCRYPT a string
 */
export const encrypt = (str: string | undefined): string => {
    if (str)
        return CryptoJS.AES.encrypt(
            str,
            import.meta.env.VITE_CRYPTOJS_SECRET
        ).toString();
    return "";
};

/**
 *  DECRYPT a string
 */
export const decrypt = (ciphertext: string | undefined): string => {
    if (ciphertext) {
        const bytes = CryptoJS.AES.decrypt(
            ciphertext,
            import.meta.env.VITE_CRYPTOJS_SECRET
        );
        return bytes.toString(CryptoJS.enc.Utf8);
    }
    return "";
};

/**
 *  Convert a number | string to k format using numeraljs
 *  E.g.:
 *      const number = 12500;
 *      const formattedNumber = formatThounsandNumber(number); // 12.5k
 */
export const formatThounsandNumber = (
    num: number | string,
    isJustComma?: boolean
): string => {
    const numAsNumber: number = typeof num === "string" ? parseInt(num) : num;
    if (numAsNumber < 1000) {
        return num.toString();
    }

    const formatted = isJustComma
        ? numeral(numAsNumber).format("0,0")
        : numeral(num).format("0.[0]a").replace(".0", "");
    return formatted;
};
