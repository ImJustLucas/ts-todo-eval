import React, {useContext} from "react";
import { Select, Option } from "@material-tailwind/react";
import { TodoContext } from "../contexts/todo.context.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmarkCircle} from "@fortawesome/free-solid-svg-icons";
import Search from "./Search.tsx";

export const Header: React.FC = () => {
    const { filter } = useContext(TodoContext);

    const handleChange = (e: string | undefined) => {
        filter.set(e);
        console.log(e);
    };

    return (
        <div className="flex flex-col justify-center items-center gap-2">

            <Search />
            <div className="flex items-center justify-end mr-2 relative">
                <Select variant="outlined" label="Sort by" value={filter.get} onChange={handleChange}>
                    <Option value="priority">Priority</Option>
                    <Option value="state">State</Option>
                    <Option value="date">Date</Option>
                </Select>

                {filter.get !== undefined &&
                    <FontAwesomeIcon className="text-gray-600 absolute mr-2 bg-white z-20 cursor-pointer transition-all ease-in-out hover:text-gray-400" icon={faXmarkCircle} onClick={filter.resetFilter}/>
                }
            </div>

        </div>
    );
};
