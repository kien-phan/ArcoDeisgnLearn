import LCSContentStatistic from "./Components/LCSContentStatistic";
import Overview from "./Components/Overview";

function MultiDAnalysis() {
    return (
        <section className="grid grid-cols-12 gap-STANDARDMARGINANDPADDING">
            <div className="col-span-12 lg:col-span-8">
                <Overview />
            </div>
            <div className="col-span-12 lg:col-span-4">
                <LCSContentStatistic />
            </div>
        </section>
    );
}

export default MultiDAnalysis;
