import { useCallback, useMemo } from "react";

import { ColumnProps } from "@arco-design/web-react/es/Table";
import { PaginationProps } from "@arco-design/web-react";

import { ELEMENT_ID } from "src/Core";
import TableCpn from "./TableCpn";
import { MockUser } from "src/Domain/Model/MockUser";
import IdCpn from "./IdCpn";
import GroupListCpn from "./GroupListCpn";
import StatusCpn from "./StatusCpn";
import tailwindConfig from "../../../../tailwind.config";
import { useWidthElement } from "src/Core/Hooks/useWidthElement";

interface Props {
    loading: boolean;
    data: any;
    pagination: PaginationProps;
    handleChangeTable: (pagination: PaginationProps) => void;
}

function TableUserManage({
    loading,
    data,
    pagination,
    handleChangeTable,
}: Props) {
    // CALCULATE WIDTH
    const idColumnWidth = useMemo(() => 80, []);

    const columnWidthExceptIdFunc = useCallback(() => {
        const siderWidth = useWidthElement([`${ELEMENT_ID.SIDER}`]);
        if (siderWidth === undefined) {
            console.error("siderWidth is undefined");
            return 250;
        }

        const standardContainerPaddingX =
            parseInt(
                tailwindConfig?.theme?.extend?.spacing
                    ?.STANDARDCONTAINERPADDINGX,
                10
            ) || 0;

        const mdScreenWidth =
            parseInt(tailwindConfig?.theme?.screens?.md, 10) || 0;

        const width =
            (window.innerWidth -
                standardContainerPaddingX * 4 -
                siderWidth -
                idColumnWidth) /
            4;

        if (window.innerWidth > mdScreenWidth) {
            return width;
        }
        return 250;
    }, [idColumnWidth]);

    const columnWidthExceptId = columnWidthExceptIdFunc();

    const columns: ColumnProps<MockUser>[] = useMemo(() => {
        return [
            {
                key: "id",
                title: "ID",
                dataIndex: "id",
                render: (_col: any, record: MockUser) => (
                    <IdCpn mockUser={record} />
                ),
                width: idColumnWidth,
                fixed: "left" as const,
            },
            {
                key: "username",
                title: "Tên",
                dataIndex: "user_name",
                width: columnWidthExceptId,
            },
            {
                key: "email",
                title: "Email",
                dataIndex: "email",
                render: (_col, record) => (
                    <span className="block">{record?.email}</span>
                ),
                width: columnWidthExceptId,
            },
            {
                key: "group-list",
                title: "Phân quyền",
                dataIndex: "group_list",
                width: columnWidthExceptId,
                render: (_col, record) => (
                    <GroupListCpn GroupList={record?.group_list} />
                ),
            },
            {
                key: "status-label",
                title: "Trạng thái",
                dataIndex: "status_label",
                render: (_col, record) => <StatusCpn mockUser={record} />,
            },
        ] as ColumnProps<MockUser>[];
    }, [columnWidthExceptId, idColumnWidth]);

    return (
        <div id={ELEMENT_ID?.TABLE}>
            <TableCpn
                loading={loading}
                columns={columns}
                data={data}
                pagination={pagination}
                handleChangeTable={handleChangeTable}
            />
        </div>
    );
}

export default TableUserManage;
