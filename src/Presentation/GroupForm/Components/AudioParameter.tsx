import { GroupFormParameterItemPropsInterface } from "src/Core";
import WhiteContainer from "src/Core/Components/WhiteContainer";
import ParameterItem from "./ParameterItem";

function AudioParameter() {
    const parameters: GroupFormParameterItemPropsInterface[] = [
        {
            label: "Match Mode",
            placeholder: "Please select",
            options: ["Tuỳ chỉnh", "Chế độ 1", "Chế độ 2"],
        },
        {
            label: "Acquisition Channels",
            placeholder: "Please select",
            options: ["1", "2", "3"],
        },
        {
            label: "Encoding Rate",
            placeholder: "Enter Range [150, 1800]",
            after: "bps",
        },
        {
            label: "Encoding Profile",
            placeholder: "Enter Range [150, 1800]",
            after: "fps",
        },
    ];
    return (
        <WhiteContainer>
            <div className="flex flex-col gap-STANDARDMARGINANDPADDING">
                <h1 className="text-base">Audio Parameters</h1>
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

export default AudioParameter;
