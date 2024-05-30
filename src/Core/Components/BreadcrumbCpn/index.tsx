import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import {
    GetLeftMenuDatas,
    LeftMenuInterface,
    GetBreadCrumbArray,
    ELEMENT_ID,
} from "src/Core";
import { useAppSelector } from "src/Data/DataSource/Api/LocalDB/reduxHooks";

import { Breadcrumb } from "@arco-design/web-react";
import { IconCheck } from "@arco-design/web-react/icon";
const BreadcrumbItem = Breadcrumb.Item;

function BreadcrumbCpn() {
    // PATH
    const path = useLocation().pathname;

    // LOCALE
    const locale = useAppSelector((state) => state?.common?.locale);

    // DROP DATAS
    const dropDatas: LeftMenuInterface[] = useMemo(
        () => GetLeftMenuDatas(locale),
        [locale]
    );

    // LABELs
    const MenuList = useMemo(
        () => GetBreadCrumbArray(dropDatas, path),
        [dropDatas, path]
    );

    return (
        <div
            id={ELEMENT_ID?.BREADCRUMB}
            className="bg-[color:var(--color-bg-2)] w-full my-BREADCRUMBMARGINY px-STANDARDMARGINANDPADDING py-3 flex flex-row justify-start items-center"
        >
            <Breadcrumb>
                <BreadcrumbItem className="p-0">
                    {MenuList[0]?.icon || <IconCheck />}
                </BreadcrumbItem>
                {MenuList
                    ? MenuList?.map((item) => (
                          <BreadcrumbItem key={item?.key} className="p-0">
                              {item?.label}
                          </BreadcrumbItem>
                      ))
                    : "Error"}
            </Breadcrumb>
        </div>
    );
}

export default BreadcrumbCpn;
