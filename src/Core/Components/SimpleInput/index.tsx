import { Input } from "@arco-design/web-react";

interface Props {
    placeholder: string;
    before: React.ReactNode;
    after: React.ReactNode;
}

function SimpleInput({ placeholder, before, after }: Props) {
    console.log(after);

    return (
        <Input
            addBefore={before}
            addAfter={after}
            placeholder={placeholder}
            className="w-full text-sm"
        />
    );
}

export default SimpleInput;
