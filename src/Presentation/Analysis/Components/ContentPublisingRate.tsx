import WhiteContainer from "src/Core/Components/WhiteContainer";
import ChartContentPublisingRate from "./ChartContentPublisingRate";
import { memo } from "react";

function ContentPublisingRate() {
    return (
        <WhiteContainer>
            <div className="h-full flex flex-col">
                <h2 className="mb-4">Content publishing rate</h2>
                <div className="flex-1 flex flex-row justify-center items-center">
                    <ChartContentPublisingRate />
                </div>
            </div>
        </WhiteContainer>
    );
}

export default memo(ContentPublisingRate);
