import { ReactNode } from "react";
import { Dropdown } from "@arco-design/web-react";

interface Props {
    children: ReactNode;
    dropList: ReactNode;
}
function DropDownComponent({ children, dropList }: Props) {
    return (
        <Dropdown droplist={dropList} position="br">
            {children}
        </Dropdown>
    );
}

export default DropDownComponent;
