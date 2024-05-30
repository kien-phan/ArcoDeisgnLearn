import WhiteContainer from "src/Core/Components/WhiteContainer";
import { Tabs } from "@arco-design/web-react";
import AllCardList from "./Components/AllCardList";
import SearchCard from "./Components/SearchCard";
const TabPane = Tabs.TabPane;

function ListCardContainer() {
    return (
        <WhiteContainer>
            <h2 className="text-base">Card List</h2>
            <div className="w-full mt-STANDARDMARGINANDPADDING rounded !bg-[color:var(--color-bg-2)] flex flex-row justify-between items-start">
                <Tabs
                    type="rounded"
                    defaultActiveTab="1"
                    extra={<SearchCard />}
                    className="w-full mt-STANDARDMARGINANDPADDING"
                >
                    <TabPane key="1" title="All">
                        <AllCardList contentQuality rulePreset serviceOpening />
                    </TabPane>
                    <TabPane key="2" title="Content quality">
                        <AllCardList contentQuality />
                    </TabPane>
                    <TabPane key="3" title="Service opening">
                        <AllCardList serviceOpening />
                    </TabPane>
                    <TabPane key="4" title="Rule presets">
                        <AllCardList rulePreset />
                    </TabPane>
                </Tabs>
            </div>
        </WhiteContainer>
    );
}

export default ListCardContainer;
