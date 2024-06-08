import { PublicOpinionAnalysisInterface } from "src/Core";
import PublicOpinionAnalysisCard from "./PublicOpinionAnalysisCard";
import DVLineChart from "./DVLineChart";
import DVBarChart from "./DVBarChart";
import DVPieChart from "./DVPieChart";
import WhiteContainer from "src/Core/Components/WhiteContainer";
import { memo } from "react";

function PublicOpinionAnalysis() {
    const data: PublicOpinionAnalysisInterface[] = [
        {
            title: "Total visitors",
            amount: 3777,
            todayChange: 271,
            chart: <DVLineChart />,
        },
        {
            title: "Total content publishing",
            amount: 5484,
            todayChange: -310,
            chart: <DVBarChart />,
        },
        {
            title: "Total comments",
            amount: 1252,
            todayChange: -652,
            chart: <DVLineChart />,
        },
        {
            title: "Total share",
            amount: 7090,
            todayChange: -972,
            chart: <DVPieChart />,
        },
    ];
    return (
        <WhiteContainer>
            <div className="flex flex-col items-start justify-start gap-STANDARDMARGINANDPADDING">
                <h2>Public Opinion Analysis</h2>
                <div className="w-full grid grid-cols-12 gap-STANDARDMARGINANDPADDING">
                    {data &&
                        data.map((item) => (
                            <PublicOpinionAnalysisCard
                                title={item?.title}
                                amount={item?.amount}
                                todayChange={item?.todayChange}
                                chart={item?.chart}
                            />
                        ))}
                </div>
            </div>
        </WhiteContainer>
    );
}

export default memo(PublicOpinionAnalysis);
