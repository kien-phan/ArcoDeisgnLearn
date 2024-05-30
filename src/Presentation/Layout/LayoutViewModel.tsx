import { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@arco-design/web-react";
import { IconMenuFold, IconMenuUnfold } from "@arco-design/web-react/icon";

import { Fact } from "src/Domain/Model/Fact";
import FactAPIDataSourceImpl from "src/Data/DataSource/Api/FactAPIDataSourceImpl";
import { FactRepositoryImpl } from "src/Data/Repository/FactRepositoryImpl";
import { GetFacts } from "src/Domain/UseCase/Fact/GetFacts";
import tailwindConfig from "../../../tailwind.config";

function LayoutViewModel() {
    // STATEs
    const [collapsed, setCollapsed] = useState(true);
    const [siderWidth, setSiderWidth] = useState(
        tailwindConfig.theme.extend.spacing.SIDERCOLLAPSEWIDTH
    );
    const [facts, setFacts] = useState<Fact[]>([]);

    // REFs
    const headerRef = useRef<HTMLDivElement>(null);
    const breadcrumbRef = useRef<HTMLDivElement>(null);

    //IMPLs
    const factsDataSourceImpl = new FactAPIDataSourceImpl();
    const factsRepositoryImpl = new FactRepositoryImpl(factsDataSourceImpl);

    // USE CASES
    const getFactsUseCase = new GetFacts(factsRepositoryImpl);

    // HANDLE COLLAPSE
    const handleCollapse = useCallback(
        (collapsedd: boolean, type: "clickTrigger" | "responsive") => {
            if (type === "clickTrigger") {
                setCollapsed(collapsedd);
                setSiderWidth(
                    collapsedd
                        ? tailwindConfig.theme.extend.spacing.SIDERCOLLAPSEWIDTH
                        : tailwindConfig.theme.extend.spacing.SIDERNORMALWIDTH
                );
            }
        },
        []
    );

    //HANDLE CALL API
    const getFacts = async () => {
        setFacts(
            await getFactsUseCase.invoke("https://cat-fact.herokuapp.com/facts")
        );
    };

    // TRIGGER BUTTON
    const triggerButton = useMemo(
        () => (
            <div
                className={`absolute bottom-3 flex flex-row justify-center ${
                    collapsed ? "left-0 right-0" : "right-3"
                }`}
            >
                <Button
                    className={collapsed ? "" : "mr-4"}
                    shape="round"
                    type="default"
                    icon={collapsed ? <IconMenuUnfold /> : <IconMenuFold />}
                    onClick={() => handleCollapse(!collapsed, "clickTrigger")}
                />
            </div>
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [collapsed]
    );

    // NAVIGATE
    const navigate = useNavigate();

    return {
        facts,
        getFacts,
        collapsed,
        siderWidth,
        handleCollapse,
        triggerButton,
        navigate,
        headerRef,
        breadcrumbRef,
    };
}

export default LayoutViewModel;
