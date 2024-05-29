import { Button, Tag } from "@arco-design/web-react";
import {
    IconFaceSmileFill,
    IconSunFill,
    IconThumbUpFill,
} from "@arco-design/web-react/icon";
import { ServiceOpeningInterface } from "src/Core";
import tailwindConfig from "../../../../tailwind.config";
import CardContainer from "./CardContainer";

function ServiceOpening({ title, content, status }: ServiceOpeningInterface) {
    const statusIcon = {
        none: <IconThumbUpFill />,
        expire: <IconFaceSmileFill />,
        opened: <IconSunFill />,
    }[status];

    const statusTag = {
        expire: {
            color: tailwindConfig?.theme?.extend?.colors?.CRED,
            label: "Expired",
        },
        opened: {
            color: tailwindConfig?.theme?.extend?.colors?.CGREEN,
            label: "Already opened",
        },
        none: null,
    }[status];

    const statusButton = {
        none: <Button type="outline">Subscribe</Button>,
        expire: <Button type="outline">Renewal</Button>,
        opened: <Button type="secondary">Cancel</Button>,
    }[status];

    return (
        <CardContainer
            title={title}
            titleIcon={statusIcon}
            headerTag={
                statusTag ? (
                    <Tag color={statusTag?.color}>{statusTag?.label}</Tag>
                ) : null
            }
        >
            <div className="min-h-[100px] flex flex-col justify-between">
                <p>{content}</p>
                <div className="flex flex-row justify-end items-center">
                    {statusButton}
                </div>
            </div>
        </CardContainer>
    );
}

export default ServiceOpening;
