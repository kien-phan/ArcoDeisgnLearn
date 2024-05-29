import { Input } from "@arco-design/web-react";

const InputSearch = Input.Search;

function SearchCard() {
    return (
        <InputSearch
            allowClear
            placeholder="Enter keyword to search"
            style={{ width: 350 }}
        />
    );
}

export default SearchCard;
