import { Chart, Interval, Axis, Tooltip, Legend } from "bizcharts";
import { memo, useMemo } from "react";

function ChartBarRaS() {
    // FLAG TO CHANGE BAR COLOR
    let flag = -1;

    // EXAMPLE DATA
    const data = useMemo(
        () => [
            { type: "A", value: 1559 },
            { type: "B", value: 2003 },
            { type: "C", value: 2819 },
            { type: "D", value: 3163 },
            { type: "E", value: 4526 },
            { type: "F", value: 5216 },
            { type: "G", value: 5419 },
            { type: "H", value: 5482 },
            { type: "I", value: 5835 },
            { type: "J", value: 6018 },
            { type: "K", value: 6992 },
            { type: "L", value: 7893 },
        ],
        []
    );

    return (
        <Chart height={80} data={data} autoFit interactions={["active-region"]}>
            <Axis name="type" visible={false} />
            <Axis name="value" visible={false} />
            <Tooltip
                children={(_title, items) => {
                    console.log(items);

                    return (
                        <div className="p-2 font-bold">{items![0].value}</div>
                    );
                }}
            />
            <Legend visible={false} />
            <Interval
                position="type*value"
                color={[
                    "value",
                    () => {
                        flag += 1;
                        if (flag % 2 === 0) {
                            return "#8de174";
                        } else {
                            return "#5193ff";
                        }
                    },
                ]}
            />
        </Chart>
    );
}

export default memo(ChartBarRaS);
