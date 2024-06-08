import { memo } from "react";
import WhiteContainer from "src/Core/Components/WhiteContainer";
import TopAuthorListTable from "./TopAuthorListTable";

function TopAuthorList() {
    return (
        <WhiteContainer>
            <h2 className="mb-4">Top authors list</h2>
            <TopAuthorListTable />
        </WhiteContainer>
    );
}

export default memo(TopAuthorList);
