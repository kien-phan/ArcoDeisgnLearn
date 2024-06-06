import { Chart, Line, Tooltip, Axis, Legend, Slider } from "bizcharts";

const data = [
    { time: "00:00", category: "Text", value: 40 },
    { time: "02:00", category: "Text", value: 80 },
    { time: "04:00", category: "Text", value: 20 },
    { time: "06:00", category: "Text", value: 60 },
    { time: "08:00", category: "Text", value: 30 },
    { time: "10:00", category: "Text", value: 50 },
    { time: "12:00", category: "Text", value: 90 },
    { time: "14:00", category: "Text", value: 70 },
    { time: "16:00", category: "Text", value: 50 },
    { time: "18:00", category: "Text", value: 20 },
    { time: "20:00", category: "Text", value: 60 },
    { time: "22:00", category: "Text", value: 80 },
    { time: "00:00", category: "Video", value: 60 },
    { time: "02:00", category: "Video", value: 40 },
    { time: "04:00", category: "Video", value: 70 },
    { time: "06:00", category: "Video", value: 20 },
    { time: "08:00", category: "Video", value: 50 },
    { time: "10:00", category: "Video", value: 80 },
    { time: "12:00", category: "Video", value: 40 },
    { time: "14:00", category: "Video", value: 90 },
    { time: "16:00", category: "Video", value: 30 },
    { time: "18:00", category: "Video", value: 60 },
    { time: "20:00", category: "Video", value: 20 },
    { time: "22:00", category: "Video", value: 70 },
    { time: "00:00", category: "Image", value: 50 },
    { time: "02:00", category: "Image", value: 30 },
    { time: "04:00", category: "Image", value: 60 },
    { time: "06:00", category: "Image", value: 40 },
    { time: "08:00", category: "Image", value: 70 },
    { time: "10:00", category: "Image", value: 20 },
    { time: "12:00", category: "Image", value: 80 },
    { time: "14:00", category: "Image", value: 50 },
    { time: "16:00", category: "Image", value: 20 },
    { time: "18:00", category: "Image", value: 40 },
    { time: "20:00", category: "Image", value: 70 },
    { time: "22:00", category: "Image", value: 30 },
];

function ChartContentPeriodAnalysis() {
    return (
        <Chart
            height={400}
            data={data}
            autoFit
            scale={{ value: { min: 0, max: 100 }, time: { range: [0, 1] } }}
        >
            <Axis name="time" />
            <Axis name="value" />
            <Tooltip shared showCrosshairs />
            <Legend position="bottom" />
            <Line position="time*value" color="category" shape="smooth" />
            <Slider />
        </Chart>
    );
}

export default ChartContentPeriodAnalysis;
