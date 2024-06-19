import AudioParameter from "./Components/AudioParameter";
import Explanation from "./Components/Explanation";
import SubmitPane from "./Components/SubmitPane";
import VideoParameter from "./Components/VideoParameter";

function GroupFormContainer() {
    return (
        <div className="relative flex flex-col justify-start items-start gap-STANDARDMARGINANDPADDING">
            <VideoParameter />
            <AudioParameter />
            <Explanation />
            <SubmitPane />
        </div>
    );
}

export default GroupFormContainer;
