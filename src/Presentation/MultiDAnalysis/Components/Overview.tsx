import {
    IconEdit,
    IconHeart,
    IconThumbUp,
    IconUser,
} from "@arco-design/web-react/icon";
import { memo, useMemo } from "react";
import WhiteContainer from "src/Core/Components/WhiteContainer";
import LegendItem from "./LegendItem";
import ChartOverview from "./ChartOverview";

function Overview() {
    // LEGEND LIST
    const legends = useMemo(
        () => [
            {
                title: "Content production",
                value: 4924,
                icon: (
                    <div className="w-8 h-8 bg-[color:rgb(var(--orange-2))] text-[color:rgb(var(--orange-6))] text-lg rounded-md flex flex-row justify-center items-center">
                        <IconEdit />
                    </div>
                ),
            },
            {
                title: "Content clicks",
                value: 2144,
                icon: (
                    <div className="w-8 h-8 bg-[color:rgb(var(--cyan-2))] text-[color:rgb(var(--cyan-6))] text-lg rounded-md flex flex-row justify-center items-center">
                        <IconThumbUp />
                    </div>
                ),
            },
            {
                title: "Content exposure",
                value: 7050,
                icon: (
                    <div className="w-8 h-8 bg-ARCOBLUE1 text-[color:rgb(var(--arcoblue-6))] text-lg rounded-md flex flex-row justify-center items-center">
                        <IconHeart />
                    </div>
                ),
            },
            {
                title: "Active users",
                value: 7892,
                icon: (
                    <div className="w-8 h-8 bg-[color:rgb(var(--purple-1))] text-[color:rgb(var(--purple-6))] text-lg rounded-md flex flex-row justify-center items-center">
                        <IconUser />
                    </div>
                ),
            },
        ],
        []
    );
    return (
        <WhiteContainer>
            <div className="flex flex-col">
                <h2>Overview</h2>
                <div className="my-4 flex flex-row justify-around items-center gap-STANDARDMARGINANDPADDING">
                    {legends.map((legend) => (
                        <LegendItem
                            title={legend.title}
                            value={legend.value}
                            icon={legend.icon}
                        />
                    ))}
                </div>
                <ChartOverview />
            </div>
        </WhiteContainer>
    );
}

export default memo(Overview);
