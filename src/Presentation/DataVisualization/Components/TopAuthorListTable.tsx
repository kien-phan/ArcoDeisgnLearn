import { Table, TableColumnProps } from "@arco-design/web-react";
import { memo } from "react";

function TopAuthorListTable() {
    const columns: TableColumnProps[] = [
        {
            title: "Rank",
            dataIndex: "rank",
        },
        {
            title: "Author",
            dataIndex: "author",
        },
        {
            title: "Interval volume",
            dataIndex: "intervalVolume",
        },
        {
            title: "Click volume",
            dataIndex: "clickVolume",
        },
    ];
    const data = [
        {
            key: "1",
            rank: "1",
            author: "Christopher",
            intervalVolume: 3690,
            clickVolume: 29899,
        },
        {
            key: "2",
            rank: "2",
            author: "陈皮话梅糖",
            intervalVolume: 4178,
            clickVolume: 27116,
        },
        {
            key: "3",
            rank: "3",
            author: "Christopher",
            intervalVolume: 3227,
            clickVolume: 13148,
        },
        {
            key: "4",
            rank: "4",
            author: "王多鱼",
            intervalVolume: 2484,
            clickVolume: 12354,
        },
        {
            key: "5",
            rank: "5",
            author: "碳烤小肥羊",
            intervalVolume: 1234,
            clickVolume: 18286,
        },
        {
            key: "6",
            rank: "6",
            author: "叫我小李好了",
            intervalVolume: 3063,
            clickVolume: 21130,
        },
        {
            key: "7",
            rank: "7",
            author: "王多鱼",
            intervalVolume: 1682,
            clickVolume: 19215,
        },
        {
            key: "8",
            rank: "8",
            author: "陈皮话梅糖",
            intervalVolume: 1119,
            clickVolume: 19459,
        },
    ];
    return (
        <Table
            columns={columns}
            data={data}
            pagination={false}
            scroll={{ y: window.innerHeight > 1024 ? 307 : undefined }}
        />
    );
}

export default memo(TopAuthorListTable);
