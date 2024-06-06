import { Chart, Interval, Interaction, Tooltip } from "bizcharts";
import { memo } from "react";

const data = [
    {
        time: "00:00",
        city: "Tokyo",
        temperature: 3637,
    },
    {
        time: "00:00",
        city: "London",
        temperature: 4032,
    },
    {
        time: "00:00",
        city: "HCM",
        temperature: 4513,
    },
    {
        time: "02:00",
        city: "Tokyo",
        temperature: 2887,
    },
    {
        time: "02:00",
        city: "London",
        temperature: 3810,
    },
    {
        time: "02:00",
        city: "HCM",
        temperature: 2887,
    },
    {
        time: "04:00",
        city: "Tokyo",
        temperature: 4602,
    },
    {
        time: "04:00",
        city: "London",
        temperature: 4430,
    },
    {
        time: "04:00",
        city: "HCM",
        temperature: 4323,
    },
    {
        time: "06:00",
        city: "Tokyo",
        temperature: 4168,
    },
    {
        time: "06:00",
        city: "London",
        temperature: 1793,
    },
    {
        time: "06:00",
        city: "HCM",
        temperature: 3955,
    },
    {
        time: "08:00",
        city: "Tokyo",
        temperature: 1909,
    },
    {
        time: "08:00",
        city: "London",
        temperature: 1255,
    },
    {
        time: "08:00",
        city: "HCM",
        temperature: 1254,
    },
    {
        time: "10:00",
        city: "Tokyo",
        temperature: 4008,
    },
    {
        time: "10:00",
        city: "London",
        temperature: 3205,
    },
    {
        time: "10:00",
        city: "HCM",
        temperature: 1367,
    },
    {
        time: "12:00",
        city: "Tokyo",
        temperature: 2145,
    },
    {
        time: "12:00",
        city: "London",
        temperature: 2055,
    },
    {
        time: "12:00",
        city: "HCM",
        temperature: 4191,
    },
    {
        time: "14:00",
        city: "Tokyo",
        temperature: 1695,
    },
    {
        time: "14:00",
        city: "London",
        temperature: 3954,
    },
    {
        time: "14:00",
        city: "HCM",
        temperature: 3329,
    },
    {
        time: "16:00",
        city: "Tokyo",
        temperature: 1069,
    },
    {
        time: "16:00",
        city: "London",
        temperature: 2288,
    },
    {
        time: "16:00",
        city: "HCM",
        temperature: 3707,
    },
    {
        time: "18:00",
        city: "Tokyo",
        temperature: 4505,
    },
    {
        time: "18:00",
        city: "London",
        temperature: 4485,
    },
    {
        time: "18:00",
        city: "HCM",
        temperature: 4286,
    },
    {
        time: "20:00",
        city: "Tokyo",
        temperature: 1971,
    },
    {
        time: "20:00",
        city: "London",
        temperature: 1400,
    },
    {
        time: "20:00",
        city: "HCM",
        temperature: 4799,
    },
    {
        time: "22:00",
        city: "Tokyo",
        temperature: 4963,
    },
    {
        time: "22:00",
        city: "London",
        temperature: 4198,
    },
    {
        time: "22:00",
        city: "HCM",
        temperature: 1865,
    },
];

function ChartContentPublisingRate() {
    return (
        <Chart padding="auto" autoFit height={370} data={data}>
            <Interval
                adjust={[{ type: "stack" }]}
                shape=""
                position="time*temperature"
                color={["city", ["#89e4fe", "#22b6ff", "#3177ff"]]}
            />
            <Tooltip shared />
            <Interaction type="active-region" />
        </Chart>
    );
}

export default memo(ChartContentPublisingRate);
