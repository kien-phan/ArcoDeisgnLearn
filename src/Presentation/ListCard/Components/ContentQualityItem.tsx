import { memo } from "react";

import { Button } from "@arco-design/web-react";

import CardContainer from "./CardContainer";

interface Props {
    title: string;
    time: string;
    number1: number;
    number2: number;
    number3: number;
}
function ContentQualityItem({ title, time, number1, number2, number3 }: Props) {
    return (
        <CardContainer title={title}>
            <div>
                <span className="text-xs opacity-60">{time}</span>
                <div className="grid grid-cols-12 mt-STANDARDMARGINANDPADDING">
                    <div className="col-span-6 flex flex-row gap-STANDARDMARGINANDPADDING">
                        <span className="text-xs opacity-60">待质检数</span>
                        <span className="text-xs opacity-80">{number1}</span>
                    </div>
                    <div className="col-span-6 flex flex-row gap-STANDARDMARGINANDPADDING">
                        <span className="text-xs opacity-60">积压时长</span>
                        <span className="text-xs opacity-80">{number2}s</span>
                    </div>
                    <div className="col-span-6 flex flex-row gap-STANDARDMARGINANDPADDING">
                        <span className="text-xs opacity-60">待抽检数</span>
                        <span className="text-xs opacity-80">{number3}</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex flex-col justify-center xl:flex-row xl:justify-end items-center gap-STANDARDMARGINANDPADDING overflow-hidden">
                <Button
                    type="secondary"
                    className="h-auto xl:h-8 w-full xl:w-auto"
                >
                    Remove
                </Button>
                <Button
                    type="primary"
                    className="h-auto xl:h-8 w-full xl:w-auto"
                >
                    Quality inspection
                </Button>
            </div>
        </CardContainer>
    );
}

export default memo(ContentQualityItem);
