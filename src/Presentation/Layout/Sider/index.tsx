import { GetLeftMenuDatas, LeftMenuInterface } from "src/Core";
import DropList from "src/Core/Components/DropList";
import { useAppSelector } from "src/Data/DataSource/Api/LocalDB/reduxHooks";

function SiderChildComponent() {
    // NAVIGATE
    // const navigate = useNavigate();

    // LOCALE
    const locale = useAppSelector((state) => state?.common?.locale);

    // DROP DATAS
    const dropDatas: LeftMenuInterface[] = GetLeftMenuDatas(locale);

    return (
        <DropList
            data={dropDatas}
            mode="vertical"
            defaultSelectedKey="WorkplaceSider"
        />
    );
}

export default SiderChildComponent;
