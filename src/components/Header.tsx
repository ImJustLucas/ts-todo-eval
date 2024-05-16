import React, {useContext, useState} from "react";
import { Select, Option } from "@material-tailwind/react";
import { TodoContext } from "../contexts/todo.context.tsx";

export const Header: React.FC = () => {
    const { filter } = useContext(TodoContext);

    // const [temp, setTemp] = useState<string | undefined>(undefined);

    const handleChange = (e: string | undefined) => {
        filter.set(e);
        console.log(e);
    };
    // const handleReset = () => {
    //     filter.set(undefined);
    // };

    return (
        <div className="inline-flex space-x-2 items-center">
            <div className="w-1/2">
                <Select variant="outlined" label="Sort by" value={filter.get} onChange={handleChange}>
                    <Option value="priority">Priority</Option>
                    <Option value="state">State</Option>
                    <Option value="date">Date</Option>
                </Select>
                <button onClick={filter.resetFilter}>Reset</button>
            </div>
        </div>
    );
};
