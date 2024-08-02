import { memo } from "react";

import WhiteContainer from "src/Core/Components/WhiteContainer";
import ChartContentPeriodAnalysis from "./ChartContentPeriodAnalysis";

function ContentPeriodAnalysis() {
    return (
        <WhiteContainer>
            <h2 className="mb-4">Content Period Analysis</h2>
            <ChartContentPeriodAnalysis />
        </WhiteContainer>
    );
}

export default memo(ContentPeriodAnalysis);
