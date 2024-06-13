import { Axis, Chart, Coord, Geom, Tooltip } from "bizcharts";
import { memo, useMemo } from "react";

function ChartLCS() {
    // EXAMPLE DATA
    const data = useMemo(
        () => [
            {
                content: "Shared",
                amount: 5144,
            },
            {
                content: "Comment",
                amount: 9013,
            },
            {
                content: "Like",
                amount: 7172,
            },
        ],
        []
    );

    return (
        <Chart padding="auto" autoFit height={160} data={data}>
            <Coord transpose />
            <Axis name="content" />
            <Axis name="amount" />
            <Tooltip />
            <Geom
                type="interval"
                size={10}
                position="content*amount"
                style={{ radius: [100, 100, 100, 100] }}
            />
        </Chart>
    );
}

export default memo(ChartLCS);
