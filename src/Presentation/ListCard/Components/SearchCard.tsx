import { Input } from "@arco-design/web-react";

const InputSearch = Input.Search;

function SearchCard() {
    return (
        <InputSearch
            allowClear
            placeholder="Enter keyword to search"
            className="w-[200px] md:w-[350px]"
        />
    );
}

export default SearchCard;
