import React, {useState} from "react";
import {Button} from "@material-tailwind/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import Search from "./Search.tsx";
import {Filter} from "./Filter.tsx";
import {AddTask} from "./AddTask.tsx";

export const Header: React.FC = () => {
    const [activeInput, setActiveInput] = useState<string | null>(null);

    return (
        <div className="flex justify-between items-start gap-4">
            <h1 className="text-3xl font-medium">Tasks list</h1>

            <div className="flex flex-col justify-start items-center gap-2 min-h-24">
                <div className="flex items-center gap-3">
                    <Button size="sm" variant="outlined" onClick={() => setActiveInput(activeInput === "search" ? null : "search")}>
                        <FontAwesomeIcon className="mr-1.5" icon={faSearch}/>
                        Search
                    </Button>

                    <Button size="sm" variant="outlined" onClick={() => setActiveInput(activeInput === "sort" ? null : "sort")}>
                        <FontAwesomeIcon className="mr-1.5" icon={faFilter}/>
                        Sort By
                    </Button>

                    <Button color="blue" size="sm" variant="gradient" onClick={() => setActiveInput(activeInput === "newTask" ? null : "newTask")}>
                        <FontAwesomeIcon className="mr-1.5" icon={faAdd}/>
                        New Task
                    </Button>
                </div>

                {activeInput === "search" && <Search />}

                {activeInput === "sort" && <Filter />}

                {activeInput === "newTask" && <AddTask />}
            </div>

        </div>
    );
};
