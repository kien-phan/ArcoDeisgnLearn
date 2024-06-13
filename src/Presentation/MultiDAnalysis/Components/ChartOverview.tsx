import { Chart, Legend, LineAdvance } from "bizcharts";
import { memo, useMemo } from "react";

function ChartOverview() {
    // EXAMPLE DATA
    const data = useMemo(
        () => [
            {
                time: "06-07",
                content: "production",
                value: 1577,
            },
            {
                time: "06-07",
                content: "click",
                value: 968,
            },
            {
                time: "06-07",
                content: "exposure",
                value: 2941,
            },
            {
                time: "06-07",
                content: "user",
                value: 451,
            },
            {
                time: "06-06",
                content: "production",
                value: 1302,
            },
            {
                time: "06-06",
                content: "click",
                value: 705,
            },
            {
                time: "06-06",
                content: "exposure",
                value: 2330,
            },
            {
                time: "06-06",
                content: "user",
                value: 564,
            },
            {
                time: "06-05",
                content: "production",
                value: 1600,
            },
            {
                time: "06-05",
                content: "click",
                value: 795,
            },
            {
                time: "06-05",
                content: "exposure",
                value: 3049,
            },
            {
                time: "06-05",
                content: "user",
                value: 291,
            },
            {
                time: "06-04",
                content: "exposure",
                value: 2189,
            },
            {
                time: "06-04",
                content: "production",
                value: 1080,
            },
            {
                time: "06-04",
                content: "click",
                value: 707,
            },
            {
                time: "06-04",
                content: "user",
                value: 499,
            },
            {
                time: "06-03",
                content: "exposure",
                value: 2496,
            },
            {
                time: "06-03",
                content: "production",
                value: 1836,
            },
            {
                time: "06-03",
                content: "click",
                value: 822,
            },
            {
                time: "06-03",
                content: "user",
                value: 11,
            },
            {
                time: "06-02",
                content: "exposure",
                value: 2553,
            },
            {
                time: "06-02",
                content: "production",
                value: 1836,
            },
            {
                time: "06-02",
                content: "click",
                value: 819,
            },
            {
                time: "06-02",
                content: "user",
                value: 596,
            },
            {
                time: "06-01",
                content: "exposure",
                value: 3738,
            },
            {
                time: "06-01",
                content: "production",
                value: 1535,
            },
            {
                time: "06-01",
                content: "click",
                value: 909,
            },
            {
                time: "06-01",
                content: "user",
                value: 176,
            },
            {
                time: "05-31",
                content: "exposure",
                value: 3792,
            },
            {
                time: "05-31",
                content: "production",
                value: 1144,
            },
            {
                time: "05-31",
                content: "click",
                value: 917,
            },
            {
                time: "05-31",
                content: "user",
                value: 157,
            },
            {
                time: "05-30",
                content: "exposure",
                value: 3860,
            },
            {
                time: "05-30",
                content: "production",
                value: 1525,
            },
            {
                time: "05-30",
                content: "click",
                value: 646,
            },
            {
                time: "05-30",
                content: "user",
                value: 73,
            },
            {
                time: "05-29",
                content: "exposure",
                value: 3924,
            },
            {
                time: "05-29",
                content: "production",
                value: 1374,
            },
            {
                time: "05-29",
                content: "click",
                value: 724,
            },
            {
                time: "05-29",
                content: "user",
                value: 25,
            },
        ],
        []
    );

    return (
        <Chart padding={[10, 20, 50, 40]} autoFit height={400} data={data}>
            <LineAdvance
                shape="smooth"
                area
                position="time*value"
                color={[
                    "content",
                    ["orange", "cyan", "royalblue", "mediumpurple"],
                ]}
            />
            <Legend visible={false} />
        </Chart>
    );
}

export default memo(ChartOverview);
