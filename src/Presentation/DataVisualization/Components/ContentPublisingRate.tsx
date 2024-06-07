import WhiteContainer from "src/Core/Components/WhiteContainer";
import ChartContentPublisingRate from "./ChartContentPublisingRate";
import { memo } from "react";

function ContentPublisingRate() {
    return (
        <WhiteContainer>
            <h2 className="mb-4">Content publishing rate</h2>
            <div className="w-full h-full flex flex-row justify-center items-center">
                <ChartContentPublisingRate />
            </div>
        </WhiteContainer>
    );
}

export default memo(ContentPublisingRate);
