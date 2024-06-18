import { GroupFormParameterItemPropsInterface } from "src/Core";
import WhiteContainer from "src/Core/Components/WhiteContainer";
import ParameterItem from "./ParameterItem";

function VideoParameter() {
    const parameters: GroupFormParameterItemPropsInterface[] = [
        {
            label: "Match Mode",
            placeholder: "Please select",
            options: ["Tuỳ chỉnh", "Chế độ 1", "Chế độ 2"],
        },
        {
            label: "Acquisition Resolution",
            placeholder: "Please select",
            options: ["Nghị quyết 1", "Nghị quyết 2", "Nghị quyết 3"],
        },
        {
            label: "Acquisition Frame Rate",
            placeholder: "Enter Range [1, 30]",
            after: "fps",
        },
        {
            label: "Encoding Resolution",
            placeholder: "Please select",
            options: ["Nghị quyết 1", "Nghị quyết 2", "Nghị quyết 3"],
        },
        {
            label: "Encoding Min Rate",
            placeholder: "Enter Range [150, 1800]",
            after: "bps",
        },
        {
            label: "Encoding Max Rate",
            placeholder: "Enter Range [150, 1800]",
            after: "bps",
        },
        {
            label: "Encoding Default Rate",
            placeholder: "Enter Range [150, 1800]",
            after: "bps",
        },
        {
            label: "Encoding Frame Rate",
            placeholder: "Enter Range [1, 30]",
            after: "fps",
        },
        {
            label: "Encoding Profile",
            placeholder: "Enter Range [150, 1800]",
            after: "bps",
        },
    ];
    return (
        <WhiteContainer>
            <div className="flex flex-col gap-STANDARDMARGINANDPADDING">
                <h1 className="text-base">Video Parameters</h1>
                <div className="grid grid-cols-12 gap-4">
                    {parameters.map((item) => (
                        <div className="col-span-4">
                            <ParameterItem
                                label={item.label}
                                placeholder={item.placeholder}
                                options={item?.options}
                                before={item?.before}
                                after={item?.after}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </WhiteContainer>
    );
}

export default VideoParameter;
