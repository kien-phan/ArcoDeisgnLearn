import { Avatar } from "@arco-design/web-react";

import DropDownComponent from "src/Core/Components/Dropdown";
import DropList from "src/Core/Components/DropList";
import { DropListDataInterface } from "src/Core";

function AvatarButton() {
    const dropListData: DropListDataInterface[] = [
        {
            title: "General User",
            key: "General User",
            subList: [
                {
                    title: "Switch Role",
                    key: "Switch Role",
                },
            ],
        },
        {
            title: "User Setting",
            key: "User Setting",
        },
        {
            title: "See more",
            key: "See more",
            subList: [
                {
                    title: "Workplace",
                    key: "Workplace",
                    subList: [{ key: "workplace2", title: "Workplace2" }],
                },
                { title: "CardList", key: "CardList" },
            ],
        },
        {
            title: "d",
            key: "d",
        },
        {
            title: "Log out",
            key: "Log Out",
        },
    ];

    const dropList = <DropList data={dropListData} mode="pop" />;

    return (
        <DropDownComponent dropList={dropList}>
            <Avatar
                size={32}
                className={`bg-[color:var(--color-secondary)] text-[color:var(--color-text-2)] cursor-pointer text-sm`}
            >
                A
            </Avatar>
        </DropDownComponent>
    );
}

export default AvatarButton;
