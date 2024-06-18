import { GroupFormParameterItemPropsInterface } from "src/Core";
import SimpleInput from "src/Core/Components/SimpleInput";
import SimpleSelect from "src/Core/Components/SimpleSelect";

function ParameterItem({
    label,
    placeholder,
    before,
    after,
    options,
}: GroupFormParameterItemPropsInterface) {
    return (
        <div className="flex flex-col gap-1">
            <span>{label}</span>
            {options && options.length > 0 ? (
                <SimpleSelect options={options} placeholder={placeholder} />
            ) : (
                <SimpleInput
                    placeholder={placeholder}
                    before={before}
                    after={after}
                />
            )}
        </div>
    );
}

export default ParameterItem;
