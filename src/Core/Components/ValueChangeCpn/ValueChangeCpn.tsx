import { IconArrowFall, IconArrowRise } from "@arco-design/web-react/icon";

function ValueChangeCpn({ todayChange }: { todayChange: number }) {
    return (
        <div
            className={`flex flex-row justify-center items-center text-sm ${
                todayChange >= 0 ? "text-green-600" : "text-red-600"
            }`}
        >
            <span className="text-sm">
                {todayChange.toLocaleString("en-US")}
            </span>
            {todayChange > 0 ? (
                <IconArrowRise className="" />
            ) : (
                <IconArrowFall className="" />
            )}
        </div>
    );
}

export default ValueChangeCpn;
