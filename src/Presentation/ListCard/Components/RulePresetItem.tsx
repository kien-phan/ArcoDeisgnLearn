import { Switch, Tag } from "@arco-design/web-react";
import { RulePresetInterface } from "src/Core";
import tailwindConfig from "../../../../tailwind.config";
import { memo, useState } from "react";
import CardContainer from "./CardContainer";

function RulePresetItem({ title, content, status }: RulePresetInterface) {
    // STATE
    const [singleStatus, setSingleStatus] = useState(status);
    const [isLoading, setIsLoading] = useState(false);

    // STATUS TAG
    const statusTag = {
        none: null,
        activated: {
            color: tailwindConfig?.theme?.extend?.colors?.CGREEN,
            label: "Activated",
        },
    }[singleStatus];

    // HANDLE CHANGE
    const handleSChange = () => {
        setSingleStatus(singleStatus === "activated" ? "none" : "activated");
        setIsLoading(true);
        switch (singleStatus) {
            case "none":
                setSingleStatus("activated");
                break;
            case "activated":
                setSingleStatus("none");
                break;
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <CardContainer
            title={title}
            headerTag={
                statusTag ? (
                    <Tag color={statusTag?.color}>{statusTag?.label}</Tag>
                ) : null
            }
            isLoading={isLoading}
        >
            <p className="line-clamp-3">{content}</p>
            <div className="flex flex-row justify-end items-center">
                <Switch
                    checked={singleStatus === "activated"}
                    onChange={handleSChange}
                />
            </div>
        </CardContainer>
    );
}

export default memo(RulePresetItem);
