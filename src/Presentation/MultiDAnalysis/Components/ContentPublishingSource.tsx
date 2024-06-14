import WhiteContainer from "src/Core/Components/WhiteContainer";
import ChartCPS from "./ChartCPS";
import { memo } from "react";

function ContentPublishingSource() {
    return (
        <WhiteContainer>
            <div className="flex flex-col gap-STANDARDMARGINANDPADDING">
                <h2>Content publishing source</h2>
                <ChartCPS />
            </div>
        </WhiteContainer>
    );
}

export default memo(ContentPublishingSource);
