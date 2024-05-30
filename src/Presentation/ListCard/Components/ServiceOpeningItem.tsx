import { useState } from "react";

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
    // STATE
    const [singleStatus, setSingleStatus] = useState(status);
    const [isLoading, setIsLoading] = useState(false);

    // STATUS ICON
    const statusIcon = {
        none: <IconThumbUpFill />,
        expire: <IconFaceSmileFill />,
        opened: <IconSunFill />,
    }[status];

    // STATUS TAG
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
    }[singleStatus];

    // HANDLE CLICK
    const handleButtonActionsClick = () => {
        setIsLoading(true);
        switch (singleStatus) {
            case "none":
                setSingleStatus("opened");
                break;
            case "expire":
                setSingleStatus("opened");
                break;
            case "opened":
                setSingleStatus("none");
                break;
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    // STATUS BUTTON
    const statusButton = {
        none: (
            <Button type="outline" onClick={handleButtonActionsClick}>
                Subscribe
            </Button>
        ),
        expire: (
            <Button type="outline" onClick={handleButtonActionsClick}>
                Renewal
            </Button>
        ),
        opened: (
            <Button type="secondary" onClick={handleButtonActionsClick}>
                Cancel
            </Button>
        ),
    }[singleStatus];

    return (
        <CardContainer
            title={title}
            titleIcon={statusIcon}
            headerTag={
                statusTag ? (
                    <Tag color={statusTag?.color}>{statusTag?.label}</Tag>
                ) : null
            }
            isLoading={isLoading}
        >
            <p className="ms-[32px] mt-STANDARDMARGINANDPADDING line-clamp-3">
                {content}
            </p>
            <div className="flex flex-row justify-end items-center mt-STANDARDMARGINANDPADDING">
                {statusButton}
            </div>
        </CardContainer>
    );
}

export default ServiceOpening;
