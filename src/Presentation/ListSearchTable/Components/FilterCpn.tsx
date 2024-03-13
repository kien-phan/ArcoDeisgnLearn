import {
    Button,
    DatePicker,
    Input,
    Select,
    Typography,
} from "@arco-design/web-react";
import { CalendarValue } from "@arco-design/web-react/es/Calendar/interface";
import { IconRefresh, IconSearch } from "@arco-design/web-react/icon";
import { memo, useState } from "react";
const Option = Select.Option;

function FilterCpn() {
    // STATE
    const [collectionId, setCollectionId] = useState("");
    const [contentGenre, setContentGenre] = useState("");
    const [creationTime, setCreationTime] = useState<CalendarValue[]>([]);
    const [collectionName, setCollectionName] = useState("");
    const [filterMethod, setFilterMethod] = useState([]);
    const [status, setStatus] = useState([]);

    //HANDLE SEARCH
    const handleSearch = () => {
        console.log(creationTime);
    };

    // HANDLE RESET
    const handleReset = () => {
        console.log("reset");

        setCollectionId("");
        setCollectionName("");
        setContentGenre("");
        setCreationTime(["", ""]);
        setFilterMethod([]);
        setStatus([]);
    };

    return (
        <div className="w-full flex flex-col xl:flex-row flex-wrap">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-2 flex-1 pe-5">
                <div className="flex flex-col gap-4">
                    <div className={`grid grid-cols-12`}>
                        <Typography
                            className={`col-span-3 flex flex-row items-center`}
                        >
                            Collection ID
                        </Typography>
                        <Input
                            value={collectionId}
                            onChange={setCollectionId}
                            className={`col-span-9`}
                            allowClear
                            placeholder="Please Enter something"
                        />
                    </div>
                    <div className={`grid grid-cols-12`}>
                        <Typography
                            className={`col-span-3 flex flex-row items-center`}
                        >
                            Content genre
                        </Typography>
                        <Select
                            onChange={setContentGenre}
                            value={contentGenre}
                            className={`col-span-9`}
                            mode="multiple"
                            allowCreate
                            placeholder="all"
                            allowClear
                        >
                            <Option value="Option1">Option 1</Option>
                            <Option value="Option2">Option 2</Option>
                            <Option value="Option3">Option 3</Option>
                        </Select>
                    </div>
                    <div className={`grid grid-cols-12`}>
                        <Typography
                            className={`col-span-3 flex flex-row items-center`}
                        >
                            Creation time
                        </Typography>
                        <DatePicker.RangePicker
                            onChange={setCreationTime}
                            className={`col-span-9`}
                            value={creationTime}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className={`grid grid-cols-12`}>
                        <Typography
                            className={`col-span-3 flex flex-row items-center`}
                        >
                            Collection Name
                        </Typography>
                        <Input
                            onChange={setCollectionName}
                            value={collectionName}
                            className={`col-span-9`}
                            allowClear
                            placeholder="Please Enter something"
                        />
                    </div>
                    <div className={`grid grid-cols-12`}>
                        <Typography
                            className={`col-span-3 flex flex-row items-center`}
                        >
                            Filter method
                        </Typography>
                        <Select
                            onChange={setFilterMethod}
                            value={filterMethod}
                            className={`col-span-9`}
                            mode="multiple"
                            allowCreate
                            placeholder="all"
                            allowClear
                        >
                            <Option value="Option1">Option 1</Option>
                            <Option value="Option2">Option 2</Option>
                            <Option value="Option3">Option 3</Option>
                        </Select>
                    </div>
                    <div className={`grid grid-cols-12`}>
                        <Typography
                            className={`col-span-3 flex flex-row items-center`}
                        >
                            Status
                        </Typography>
                        <Select
                            onChange={setStatus}
                            value={status}
                            className={`col-span-9`}
                            mode="multiple"
                            allowCreate
                            placeholder="all"
                            allowClear
                        >
                            <Option value="Option1">Option 1</Option>
                            <Option value="Option2">Option 2</Option>
                            <Option value="Option3">Option 3</Option>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between items-end ps-5 xl:border-l gap-4 xl:gap-0 mt-4 xl:mt-0">
                <Button
                    type="primary"
                    title="Search"
                    icon={<IconSearch />}
                    size="default"
                    className={`w-full`}
                    onClick={handleSearch}
                >
                    Search
                </Button>
                <Button
                    onClick={handleReset}
                    type="secondary"
                    title="Reset"
                    icon={<IconRefresh />}
                    size="default"
                    className={`w-full`}
                >
                    Reset
                </Button>
            </div>
        </div>
    );
}

export default memo(FilterCpn);
