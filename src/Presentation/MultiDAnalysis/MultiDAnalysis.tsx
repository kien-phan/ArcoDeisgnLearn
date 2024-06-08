import LikeCommentStatistic from "./Components/LikeCommentStatistic";
import Overview from "./Components/Overview";

function MultiDAnalysis() {
    return (
        <section className="grid grid-cols-12 gap-STANDARDMARGINANDPADDING">
            <div className="col-span-8">
                <Overview />
            </div>
            <div className="col-span-4">
                <LikeCommentStatistic />
            </div>
        </section>
    );
}

export default MultiDAnalysis;
