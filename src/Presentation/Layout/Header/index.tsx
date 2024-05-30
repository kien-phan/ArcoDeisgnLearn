import Logo from "src/Core/Components/Logo";
import RightSideList from "./Components/RightSideList";

import { AUTHROUTE, HeaderRightSideItemInterface, ROUTES } from "src/Core";
import { useEffect, useState } from "react";
import LocaleButton from "./Components/LocaleButton";
import DarkModeButton from "./Components/DarkModeButton";
import AvatarButton from "./Components/AvatarButton";

interface Props {
    pathName: string;
}

function HeaderLayoutComponent({ pathName }: Props) {
    // STATE
    const [items, setItems] = useState<HeaderRightSideItemInterface[]>([]);

    useEffect(() => {
        const headerItems: HeaderRightSideItemInterface[] = [
            {
                key: "locale-button-header",
                content: <LocaleButton />,
            },
            {
                key: "darkMode-button-header",
                content: <DarkModeButton />,
            },
        ];

        if (!pathName.includes(AUTHROUTE) && pathName !== ROUTES.ROOT) {
            console.log(pathName);

            headerItems.push({
                key: "avatar-button-header",
                content: <AvatarButton />,
            });
        }

        setItems(headerItems);
    }, [pathName]);

    return (
        <div className="h-full flex flex-row justify-between items-center">
            <div className="ps-STANDARDCONTAINERPADDINGX">
                <Logo />
            </div>
            <div className="flex flex-row gap-2">
                <RightSideList items={items ?? []} />
            </div>
        </div>
    );
}

export default HeaderLayoutComponent;
