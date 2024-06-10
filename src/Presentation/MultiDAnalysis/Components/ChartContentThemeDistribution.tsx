import { Axis, Chart, Coord, Geom, Legend, Tooltip } from "bizcharts";

function ChartContentThemeDistribution() {
    const getRandomInt = () => {
        return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    };

    const data = [
        { item: "Quốc tế", type: "Văn bản", score: getRandomInt() },
        { item: "Quốc tế", type: "Hình ảnh", score: getRandomInt() },
        { item: "Quốc tế", type: "Âm thanh", score: getRandomInt() },
        { item: "Giải trí", type: "Văn bản", score: getRandomInt() },
        { item: "Giải trí", type: "Hình ảnh", score: getRandomInt() },
        { item: "Giải trí", type: "Âm thanh", score: getRandomInt() },
        { item: "Thể thao", type: "Văn bản", score: getRandomInt() },
        { item: "Thể thao", type: "Hình ảnh", score: getRandomInt() },
        { item: "Thể thao", type: "Âm thanh", score: getRandomInt() },
        { item: "Kinh tế", type: "Văn bản", score: getRandomInt() },
        { item: "Kinh tế", type: "Hình ảnh", score: getRandomInt() },
        { item: "Kinh tế", type: "Âm thanh", score: getRandomInt() },
        { item: "Khoa học", type: "Văn bản", score: getRandomInt() },
        { item: "Khoa học", type: "Hình ảnh", score: getRandomInt() },
        { item: "Khoa học", type: "Âm thanh", score: getRandomInt() },
        { item: "Khác", type: "Văn bản", score: getRandomInt() },
        { item: "Khác", type: "Hình ảnh", score: getRandomInt() },
        { item: "Khác", type: "Âm thanh", score: getRandomInt() },
    ];
    const cols = {
        score: {
            min: 0,
            max: 100,
        },
    };

    return (
        <Chart data={data} padding="auto" autoFit scale={cols} height={200}>
            <Coord type="polar" radius={0.8} />
            <Axis name="item" line={null} tickLine={null} />
            <Tooltip shared />
            <Axis name="score" line={null} tickLine={null} />
            <Legend
                name="type"
                offset={30}
                position="right"
                marker={{ symbol: "circle" }}
            />
            <Geom type="area" position="item*score" color="type" />
            <Geom type="line" position="item*score" color="type" size={2} />
        </Chart>
    );
}

export default ChartContentThemeDistribution;
