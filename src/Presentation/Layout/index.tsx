import { useEffect } from "react";
import "@arco-design/web-react/dist/css/arco.css";
import { Layout } from "@arco-design/web-react";
import { useLocation } from "react-router-dom";

const Header = Layout.Header;
import HeaderComponent from "./Header";
import useViewModel from "./LayoutViewModel";
import { ELEMENT_ID } from "src/Core";
import ContentContainer from "./Content/ContentContainer";

function LayoutComponent() {
    //LOCATION
    const location = useLocation();

    // FROM VIEWMODELS
    const { getFacts } = useViewModel();

    // USE EFFECT
    useEffect(() => {
        (async () => await getFacts())();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout className="min-h-[100vh] bg-[color:var(--color-fill-2)]">
            <Header
                id={ELEMENT_ID.HEADER}
                className="bg-[color:var(--color-bg-2)] text-center h-HEADERHEIGHT fixed left-0 top-0 right-0 z-50 border-b border-solid border-b-[color:var(--color-border)]"
            >
                <HeaderComponent pathName={location.pathname} />
            </Header>
            <ContentContainer pathName={location.pathname} />
        </Layout>
    );
}

export default LayoutComponent;
