import { memo, useMemo } from "react";
import ChartBarRaS from "./ChartBarRaS";
import ChartPathRaS from "./ChartPathRaS";
import RetentionAndConsumptionItem from "./RetentionAndConsumptionItem";

function RetentionAndConsumption() {
    // RETENTION AND COMSUMPTION LIST
    const RetentionAndConsumptionList = useMemo(
        () => [
            {
                title: "User retention trends",
                value: 1024,
                changeValue: 228,
                chart: <ChartPathRaS />,
            },
            {
                title: "User retention",
                value: 5789,
                changeValue: 366,
                chart: <ChartBarRaS />,
            },
            {
                title: "Content consumption trends",
                value: 9809,
                changeValue: 112,
                chart: <ChartPathRaS />,
            },
            {
                title: "Content consumption",
                value: 4526,
                changeValue: -470,
                chart: <ChartBarRaS />,
            },
        ],
        []
    );

    return (
        <div className="grid grid-cols-12 gap-STANDARDMARGINANDPADDING">
            {RetentionAndConsumptionList.map((item) => (
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <RetentionAndConsumptionItem
                        title={item.title}
                        value={item.value}
                        changeValue={item.changeValue}
                        chart={item.chart}
                    />
                </div>
            ))}
        </div>
    );
}

export default memo(RetentionAndConsumption);
