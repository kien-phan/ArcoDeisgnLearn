import { Axis, Chart, Path, Tooltip } from "bizcharts";
import { memo, useMemo } from "react";

function ChartBarRaS() {
    // EXAMPLE DATA
    const data = useMemo(
        () => [
            { user: 1103, year: 1966 },
            { user: 3232, year: 1967 },
            { user: 3898, year: 1968 },
            { user: 4372, year: 1969 },
            { user: 5390, year: 1970 },
            { user: 5811, year: 1971 },
            { user: 6671, year: 1972 },
            { user: 7473, year: 1973 },
            { user: 7856, year: 1974 },
            { user: 8661, year: 1975 },
            { user: 9191, year: 1976 },
        ],
        []
    );
    return (
        <Chart height={80} autoFit data={data}>
            <Axis name="year" visible={false} />
            <Axis name="user" visible={false} />
            <Path
                animate={{
                    appear: {
                        animation: "path-in",
                        duration: 1000,
                        easing: "easeLinear",
                    },
                }}
                shape="smooth"
                position="user*year"
            />
            <Tooltip
                children={(title) => (
                    <div className="p-2 font-bold">{title}</div>
                )}
                showCrosshairs
            />
        </Chart>
    );
}

export default memo(ChartBarRaS);
