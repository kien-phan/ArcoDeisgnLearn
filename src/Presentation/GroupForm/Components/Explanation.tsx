import TextAreaRef from "@arco-design/web-react/es/Input/textarea";
import WhiteContainer from "src/Core/Components/WhiteContainer";

function Explanation() {
    return (
        <WhiteContainer>
            <div className="flex flex-col gap-4">
                <h1 className="text-base">Enter Explanation</h1>
                <div className="flex flex-col gap-STANDARDMARGINANDPADDING">
                    <span>Explanation</span>
                    <TextAreaRef
                        rows={3}
                        placeholder="Please fill in the parameter description, no more than 200 characters"
                        className="w-full"
                    />
                </div>
            </div>
        </WhiteContainer>
    );
}

export default Explanation;
