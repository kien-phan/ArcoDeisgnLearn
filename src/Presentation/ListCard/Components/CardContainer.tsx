import { Card } from "@arco-design/web-react";
import { IconMore } from "@arco-design/web-react/icon";
import { LeftMenuInterface } from "src/Core";
import DropList from "src/Core/Components/DropList";
import DropDownComponent from "src/Core/Components/Dropdown";

function CardContainer({
    children,
    title,
    titleIcon,
    headerTag,
}: {
    children: React.ReactNode;
    title: string;
    titleIcon?: React.ReactNode;
    headerTag?: React.ReactNode;
}) {
    const dropListData: LeftMenuInterface[] = [
        {
            key: "option1",
            label: "操作1",
        },
        {
            key: "option2",
            label: "操作2",
        },
    ];

    return (
        <Card
            hoverable
            className="[&_.arco-card-body]:p-0 [&_.cardDropDown]:hover:block hover:shadow-md p-STANDARDMARGINANDPADDING border border-solid rounded-sm"
        >
            <div className="w-full flex flex-col">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-STANDARDMARGINANDPADDING">
                        {titleIcon && (
                            <div className="w-6 h-6 rounded-full bg-blue-700 text-white flex flex-row justify-center items-center">
                                {titleIcon}
                            </div>
                        )}
                        <div className="h-6"></div>
                        <span className="font-bold">{title}</span>
                        {headerTag}
                    </div>
                    <div className="cardDropDown hidden cursor-pointer">
                        <DropDownComponent
                            dropList={
                                <DropList data={dropListData} mode="pop" />
                            }
                        >
                            <IconMore />
                        </DropDownComponent>
                    </div>
                </div>
                {children}
            </div>
        </Card>
    );
}

export default CardContainer;
