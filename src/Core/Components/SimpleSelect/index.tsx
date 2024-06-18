import { Select } from "@arco-design/web-react";
const Option = Select.Option;

interface Props {
    placeholder: string;
    options: string[];
}

function SimpleSelect({ placeholder, options }: Props) {
    return (
        <Select placeholder={placeholder} allowClear className="w-full">
            {options.map((option) => (
                <Option key={option} value={option}>
                    {option}
                </Option>
            ))}
        </Select>
    );
}

export default SimpleSelect;
