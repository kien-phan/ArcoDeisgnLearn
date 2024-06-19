import { Button } from "@arco-design/web-react";
import { useCallback, useState } from "react";
import { showMessage } from "src/Core";

function SubmitPane() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = useCallback(() => {
        setLoading(true);
        setTimeout(() => {
            showMessage("success", "Submitted");
            setLoading(false);
        }, 1000);
    }, []);
    return (
        <div
            className={`fixed bottom-0 left-0 right-0 px-10 py-3 z-0 bg-[color:var(--color-bg-1)] flex flex-row justify-end items-center gap-STANDARDMARGINANDPADDING shadow-lg`}
        >
            <Button type="secondary">Reset</Button>
            <Button loading={loading} type="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    );
}

export default SubmitPane;
