import AudioParameter from "./Components/AudioParameter";
import VideoParameter from "./Components/VideoParameter";

function GroupFormContainer() {
    return (
        <div className="flex flex-col justify-start items-start gap-STANDARDMARGINANDPADDING">
            <VideoParameter />
            <AudioParameter />
        </div>
    );
}

export default GroupFormContainer;
