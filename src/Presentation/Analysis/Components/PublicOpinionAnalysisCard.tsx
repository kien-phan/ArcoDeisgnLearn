import { Card, Skeleton } from "@arco-design/web-react";
import { memo, useEffect, useMemo, useState } from "react";
import { PublicOpinionAnalysisInterface } from "src/Core";
import ValueChangeCpn from "src/Core/Components/ValueChangeCpn";
import { useAppSelector } from "src/Data/DataSource/Api/LocalDB/reduxHooks";

const bgGradientClasses = [
    "bg-GRADIENTBLUE",
    "bg-GRADIENTGREEN",
    "bg-GRADIENTLIGHTPURPLE",
];

const bgDarkGradientClasses = [
    "bg-GRADIENTDARKBLUE",
    "bg-GRADIENTDARKGREEN",
    "bg-GRADIENTDARKPURPLE",
];

function PublicOpinionAnalysisCard({
    title,
    amount,
    todayChange,
    chart,
}: PublicOpinionAnalysisInterface) {
    // STATE
    const [isLoading, setIsLoading] = useState(true);

    // CHECK DARK / LIGHT
    const isDark = useAppSelector((state) => state?.common?.isDarkTheme);

    // USEEFFECT
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    // RANDOM NUMBER
    const randomNumber = useMemo(() => {
        return Math.floor(Math.random() * 3);
    }, []);

    return (
        <Card
            className={`${
                isDark
                    ? bgDarkGradientClasses[randomNumber]
                    : bgGradientClasses[randomNumber]
            } [&_.arco-card-body]:p-0 p-STANDARDMARGINANDPADDING h-full [&_.arco-card-body]:h-full col-span-12 md:col-span-6 lg:col-span-3 border-none`}
        >
            <div className="h-full flex flex-row justify-between">
                <div className="flex flex-col items-start justify-start">
                    <h3 className="text-base">{title}</h3>
                    <Skeleton
                        animation
                        loading={isLoading}
                        text={{ rows: 1 }}
                        className="[&_.arco-skeleton-text-row]:!w-10 [&_.arco-skeleton-text-row]:h-6 w-10 h-6"
                    >
                        <span className="text-2xl my-4">
                            {amount.toLocaleString("en-US")}
                        </span>
                    </Skeleton>
                    <div className="flex flex-row gap-STANDARDMARGINANDPADDING items-center justify-center">
                        <h4 className="text-xs">Yesterday</h4>
                        <Skeleton
                            animation
                            loading={isLoading}
                            text={{ rows: 1 }}
                            className="[&_.arco-skeleton-text-row]:!w-10 [&_.arco-skeleton-text-row]:h-6 w-10 h-6"
                        >
                            <ValueChangeCpn todayChange={todayChange} />
                        </Skeleton>
                    </div>
                </div>
                <Skeleton
                    animation
                    loading={isLoading}
                    text={{ rows: 0 }}
                    image={{
                        style: {
                            width: 144,
                            height: 80,
                        },
                    }}
                    className="self-end"
                >
                    <div className="w-[144px] h-[80px] self-end">{chart}</div>
                </Skeleton>
            </div>
        </Card>
    );
}

export default memo(PublicOpinionAnalysisCard);
