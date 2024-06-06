import { Chart, Interval, Axis, Tooltip, Legend } from "bizcharts";
import { memo } from "react";

const data = [
    { type: "A", value: 3 },
    { type: "B", value: 5 },
    { type: "C", value: 7 },
    { type: "D", value: 2 },
    { type: "E", value: 8 },
    { type: "F", value: 6 },
    { type: "G", value: 4 },
    { type: "H", value: 9 },
];

function DVBarChart() {
    return (
        <Chart data={data} autoFit>
            <Axis name="type" visible={false} />
            <Axis name="value" visible={false} />
            <Tooltip visible={false} />
            <Legend visible={false} />
            <Interval
                position="type*value"
                color={[
                    "value",
                    (value) => {
                        if (value > 7) return "#74c476"; // Màu xanh nhạt
                        if (value > 5) return "#31a354"; // Màu xanh trung bình
                        return "#006d2c"; // Màu xanh đậm
                    },
                ]}
            />
        </Chart>
    );
}

export default memo(DVBarChart);
