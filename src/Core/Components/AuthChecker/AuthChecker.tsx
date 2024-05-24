import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "src/Data/DataSource/Api/LocalDB/reduxHooks";
import { ROUTES } from "src/Core";

interface Props {
    children: React.ReactNode;
}

function AuthChecker({ children }: Props) {
    // PATH
    const path = useLocation().pathname;

    // NAVIGATE
    const navigate = useNavigate();

    // USER FROM REDUX
    const user = useAppSelector((state) => state?.auth?.user);

    useEffect(() => {
        if (!user?.data?.token) {
            navigate(ROUTES.LOGIN);
        } else if (path === ROUTES.LOGIN) {
            navigate(ROUTES.DASHBOARD);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{children}</>;
}

export default AuthChecker;
