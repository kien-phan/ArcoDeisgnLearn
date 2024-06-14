import { Chart, Facet, Legend } from "bizcharts";
import { useMemo } from "react";

import tailwindConfig from "../../../../tailwind.config";
import { useWidthElement } from "src/Core/Hooks/useWidthElement";
import { useDebounce } from "src/Core";
function ChartCPS() {
    // HTMLWIDTH
    const htmlWidth = useDebounce(useWidthElement(["html"]), 1000);

    // EXAMPLE DATA
    const data = useMemo(
        () => [
            {
                category: "text",
                value: 0.03,
                type: "UGC gốc",
            },
            {
                category: "text",
                value: 0.15,
                type: "Trang web nước ngoài",
            },
            {
                category: "text",
                value: 0.24,
                type: "Bài viết",
            },
            {
                category: "text",
                value: 0.35,
                type: "Báo cáo",
            },
            {
                category: "text",
                value: 0.23,
                type: "Khác",
            },
            {
                category: "video",
                value: 0.22,
                type: "UGC gốc",
            },
            {
                category: "video",
                value: 0.32,
                type: "Trang web nước ngoài",
            },
            {
                category: "video",
                value: 0.15,
                type: "Bài viết",
            },
            {
                category: "video",
                value: 0.21,
                type: "Báo cáo",
            },
            {
                category: "video",
                value: 0.1,
                type: "Khác",
            },
            {
                category: "image",
                value: 0.24,
                type: "UGC gốc",
            },
            {
                category: "image",
                value: 0.01,
                type: "Trang web nước ngoài",
            },
            {
                category: "image",
                value: 0.35,
                type: "Bài viết",
            },
            {
                category: "image",
                value: 0.21,
                type: "Báo cáo",
            },
            {
                category: "image",
                value: 0.18,
                type: "Khác",
            },
        ],
        []
    );
    return (
        <Chart padding="auto" autoFit height={240} data={data}>
            <Legend visible={true} position="bottom" />
            <Facet
                type={
                    htmlWidth >= parseInt(tailwindConfig.theme.screens.sm, 10)
                        ? "list"
                        : "circle"
                }
                showTitle={false}
                fields={["category"]}
                eachView={(view, facet) => {
                    const data = facet.data;
                    view.coordinate({
                        type: "theta",
                        cfg: {
                            radius: 0.8,
                            innerRadius: 0.7,
                        },
                    });
                    view.interval()
                        .adjust("stack")
                        .position("value")
                        .color("type", [
                            "#249eff",
                            "#846BCE",
                            "#21CCFF",
                            " #86DF6C",
                            "#0E42D2",
                        ])
                        .label("value", {
                            content: (content: {
                                category: string;
                                value: number;
                                type: string;
                            }) => {
                                return `${(content.value * 100).toFixed(2)} %`;
                            },
                        });
                    view.annotation().text({
                        position: ["50%", "46%"],
                        content: data[0].category,
                        style: {
                            fontSize: 14,
                            fontWeight: 500,
                            textAlign: "center",
                        },
                        offsetY: 10,
                    });
                    view.interaction("element-single-selected");
                }}
            />
        </Chart>
    );
}

export default ChartCPS;
