import { DonutChart } from "bizcharts";
import { memo } from "react";

const DVPieChart = () => {
    const data = [
        { type: "Data 1", value: 148564, value2: 16, color: "#9256dc" },
        { type: "Data 2", value: 334271, value2: 36, color: "#3d47ad" },
        { type: "Data 3", value: 445695, value2: 48, color: "#35a2ff" },
    ];

    return (
        <DonutChart
            data={data || []}
            autoFit
            radius={1}
            innerRadius={0.75}
            padding="auto"
            angleField="value"
            colorField="type"
            color={data.map((item) => {
                return item.color;
            })}
            label={{
                visible: false,
            }}
            statistic={{ title: false, content: false }}
            pieStyle={{ stroke: "white", lineWidth: 1 }}
            legend={{ visible: false }}
        />
    );
};

export default memo(DVPieChart);
