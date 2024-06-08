import WhiteContainer from "src/Core/Components/WhiteContainer";
import ChartContentPeriodAnalysis from "./ChartContentPeriodAnalysis";
import { memo } from "react";

function ContentPeriodAnalysis() {
    return (
        <WhiteContainer>
            <h2 className="mb-4">Content Period Analysis</h2>
            <ChartContentPeriodAnalysis />
        </WhiteContainer>
    );
}

export default memo(ContentPeriodAnalysis);
