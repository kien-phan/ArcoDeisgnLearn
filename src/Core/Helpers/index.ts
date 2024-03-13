import { LeftMenuInterface } from "src/Core";

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
