import { memo } from "react";
import { formatThounsandNumber } from "src/Core";
import ValueChangeCpn from "src/Core/Components/ValueChangeCpn";
import WhiteContainer from "src/Core/Components/WhiteContainer";

interface Props {
    title: string;
    value: number;
    changeValue: number;
    chart: React.ReactNode;
}

function RetentionAndConsumptionItem({
    title,
    value,
    changeValue,
    chart,
}: Props) {
    return (
        <WhiteContainer>
            <div className="flex flex-col gap-STANDARDMARGINANDPADDING">
                <h2 className="text-base">{title}</h2>
                <div className="flex flex-row items-end gap-STANDARDMARGINANDPADDING">
                    <span className="text-2xl">
                        {formatThounsandNumber(value, true)}
                    </span>
                    <ValueChangeCpn todayChange={changeValue} />
                </div>
                <div>{chart}</div>
            </div>
        </WhiteContainer>
    );
}

export default memo(RetentionAndConsumptionItem);
