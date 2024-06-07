import { memo } from "react";
import ContentPeriodAnalysis from "./Components/ContentPeriodAnalysis";
import ContentPublisingRate from "./Components/ContentPublisingRate";
import PublicOpinionAnalysis from "./Components/PublicOpinionAnalysis";
import TopAuthorList from "./Components/TopAuthorList";

function DataVisualization() {
    return (
        <div className="flex flex-col gap-STANDARDMARGINANDPADDING">
            <PublicOpinionAnalysis />
            <div className="grid grid-cols-12 gap-STANDARDMARGINANDPADDING">
                <div className="col-span-12 lg:col-span-7">
                    <ContentPublisingRate />
                </div>
                <div className="col-span-12 lg:col-span-5">
                    <TopAuthorList />
                </div>
            </div>
            <ContentPeriodAnalysis />
        </div>
    );
}

export default memo(DataVisualization);
