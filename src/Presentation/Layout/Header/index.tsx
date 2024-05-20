import { useMemo } from "react";

import Logo from "src/Core/Components/Logo";
import DarkModeButton from "./Components/DarkModeButton";
import LocaleButton from "./Components/LocaleButton";
import RightSideList from "./Components/RightSideList";

import { HeaderRightSideItemInterface } from "src/Core";

function HeaderLayoutComponent() {
    // ITEMS
    const items: HeaderRightSideItemInterface[] = useMemo(
        () => [
            {
                key: "localeButtonHeader",
                content: <LocaleButton />,
            },

            {
                key: "darkModeButtonHeader",
                content: <DarkModeButton />,
            },
        ],
        []
    );
    return (
        <div className={`h-full flex flex-row justify-between items-center`}>
            <div className="ps-[20px]">
                <Logo />
            </div>
            <div className="flex flex-row gap-2">
                <RightSideList items={items ?? []} />
            </div>
        </div>
    );
}

export default HeaderLayoutComponent;
