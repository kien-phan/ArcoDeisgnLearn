import { Avatar } from "@arco-design/web-react";

import DropDownComponent from "src/Core/Components/Dropdown";
import DropList from "src/Core/Components/DropList";
import { LeftMenuInterface } from "src/Core";

function AvatarButton() {
    // DATAS
    const dropListData: LeftMenuInterface[] = [
        {
            key: "General User",
            label: "General User",
            subList: [
                {
                    key: "Switch Role",
                    label: "Switch Role",
                },
            ],
        },
        {
            label: "User Setting",
            key: "User Setting",
        },
        {
            label: "See more",
            key: "See more",
            subList: [
                {
                    label: "Workplace",
                    key: "Workplace",
                    subList: [{ key: "workplace2", label: "Workplace2" }],
                },
                { label: "CardList", key: "CardList" },
            ],
        },
        {
            label: "d",
            key: "d",
        },
        {
            label: "Log out",
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
