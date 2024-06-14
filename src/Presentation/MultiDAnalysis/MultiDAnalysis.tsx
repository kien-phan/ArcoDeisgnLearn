import { memo } from "react";
import LCSContentStatistic from "./Components/LCSContentStatistic";
import Overview from "./Components/Overview";
import RetentionAndConsumption from "./Components/RetentionAndConsumption";
import ContentPublishingSource from "./Components/ContentPublishingSource";

function MultiDAnalysis() {
    return (
        <section className="grid grid-cols-12 gap-STANDARDMARGINANDPADDING">
            <div className="col-span-12 lg:col-span-8">
                <Overview />
            </div>
            <div className="col-span-12 lg:col-span-4">
                <LCSContentStatistic />
            </div>
            <div className="col-span-12">
                <RetentionAndConsumption />
            </div>
            <div className="col-span-12">
                <ContentPublishingSource />
            </div>
        </section>
    );
}

export default memo(MultiDAnalysis);
