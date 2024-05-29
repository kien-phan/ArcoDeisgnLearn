import { Switch, Tag } from "@arco-design/web-react";
import { RulePresetInterface } from "src/Core";
import tailwindConfig from "../../../../tailwind.config";
import { useState } from "react";
import CardContainer from "./CardContainer";

function RulePresetItem({ title, content, status }: RulePresetInterface) {
    // STATE
    const [singleStatus, setSingleStatus] = useState(status);

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
    };

    return (
        <CardContainer
            title={title}
            headerTag={
                statusTag ? (
                    <Tag color={statusTag?.color}>{statusTag?.label}</Tag>
                ) : null
            }
        >
            <div className="min-h-[100px] flex flex-col justify-between">
                <p>{content}</p>
                <div className="flex flex-row justify-end items-center">
                    <Switch
                        checked={singleStatus === "activated"}
                        onChange={handleSChange}
                    />
                </div>
            </div>
        </CardContainer>
    );
}

export default RulePresetItem;
