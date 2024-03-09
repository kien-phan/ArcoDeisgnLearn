import { useEffect } from "react";
import "@arco-design/web-react/dist/css/arco.css";
import { Layout } from "@arco-design/web-react";
import { Outlet } from "react-router-dom";

const Header = Layout.Header;
const Content = Layout.Content;
const Sider = Layout.Sider;

import HeaderComponent from "./Header";
import SiderChildComponent from "./Sider";
import useViewmodel from "./LayoutViewModel";

function LayoutComponent() {
    const {
        facts,
        getFacts,
        collapsed,
        siderWidth,
        handleCollapse,
        // handleMoving,
        triggerButton,
    } = useViewmodel();

    useEffect(() => {
        getFacts();
    }, []);
    console.log(facts);

    return (
        <Layout className={`min-h-[100vh] bg-[color:var(--color-fill-2)]`}>
            <Header className="bg-[color:var(--color-bg-2)] text-center h-[60px] fixed left-0 top-0 right-0 z-50 border-b border-solid border-b-[color:var(--color-border)]">
                <HeaderComponent />
            </Header>
            <Layout className="flex pt-[60px] bg-[color:var(--color-fill-2)]">
                <Sider
                    breakpoint="lg"
                    collapsible
                    onCollapse={handleCollapse}
                    collapsed={collapsed}
                    width={siderWidth}
                    // resizeBoxProps={{
                    //     directions: ["right"],
                    //     onMoving: handleMoving,
                    // }}
                    trigger={triggerButton}
                >
                    <SiderChildComponent />
                </Sider>
                <Layout className={`pt-4 px-5`}>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default LayoutComponent;
