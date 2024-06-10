import WhiteContainer from "src/Core/Components/WhiteContainer";
import ChartLCS from "./ChartLCS";
import ChartContentThemeDistribution from "./ChartContentThemeDistribution";

function LCSContentStatistic() {
    return (
        <WhiteContainer>
            <div className=" w-full h-full flex flex-col items-start gap-8">
                <h2>Today's Likes and Comments Statistics</h2>
                <ChartLCS />
                <h2>Content theme distribution</h2>
                <div className="w-full h-full">
                    <ChartContentThemeDistribution />
                </div>
            </div>
        </WhiteContainer>
    );
}

export default LCSContentStatistic;
