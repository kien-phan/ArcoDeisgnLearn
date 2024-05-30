import "@arco-design/web-react/dist/css/arco.css";
import { Layout } from "@arco-design/web-react";
import { Outlet } from "react-router-dom";

const Content = Layout.Content;
const Sider = Layout.Sider;
const Footer = Layout.Footer;

import SiderChildComponent from "../Sider";
import Breadcrumb from "src/Core/Components/BreadcrumbCpn";
import { AUTHROUTE, ELEMENT_ID, ROUTES } from "src/Core";
import useViewModel from "../LayoutViewModel";

interface Props {
    pathName: string;
}
function ContentContainer({ pathName }: Props) {
    // FROM VIEWMODELS
    const { collapsed, siderWidth, handleCollapse, triggerButton } =
        useViewModel();

    // LOGIN ROUTE
    if (pathName.includes(AUTHROUTE) || pathName === ROUTES.ROOT) {
        return (
            <div className="flex-1 flex flex-row justify-center items-center">
                <Outlet />
            </div>
        );
    }

    return (
        <Layout className="flex pt-HEADERHEIGHT bg-[color:var(--color-fill-2)]">
            <Sider
                breakpoint="lg"
                collapsible
                onCollapse={handleCollapse}
                collapsed={collapsed}
                width={siderWidth}
                trigger={null}
                collapsedWidth={siderWidth}
                className="fixed top-0 bottom-0 left-0 pt-HEADERHEIGHT"
            >
                <div
                    id={ELEMENT_ID.SIDER}
                    className="relative h-SIDERHEIGHT [&_.arco-menu-collapse]:w-full"
                >
                    <SiderChildComponent />
                    {triggerButton}
                </div>
            </Sider>
            <Layout
                className={`pe-STANDARDMARGINANDPADDING pb-STANDARDMARGINANDPADDING transition-all ${
                    collapsed
                        ? "ps-CONTENTPADDINGSTARTCOLLAPSE"
                        : "ps-CONTENTPADDINGSTART"
                }`}
            >
                <Breadcrumb />
                <Content>
                    <Outlet />
                </Content>
                <Footer
                    id={ELEMENT_ID?.FOOTER}
                    className="mt-2 text-xs uppercase flex flex-row justify-center items-center"
                >
                    version 0.0.0
                </Footer>
            </Layout>
        </Layout>
    );
}

export default ContentContainer;
