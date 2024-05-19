import React, { useContext, useState } from "react";
import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search.tsx";
import { Filter } from "./Filter.tsx";
import { TodoContext } from "../contexts/todo.context.tsx";

export const Header: React.FC = () => {
  const [activeInput, setActiveInput] = useState<"search" | "sort" | null>(
    null
  );

  const { showAddTaskModal } = useContext(TodoContext);

  return (
    <div className="flex justify-between items-start gap-4">
      <h1 className="text-3xl font-medium">Tasks list</h1>

      <div className="flex flex-col justify-start items-center gap-2 min-h-24">
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="outlined"
            onClick={() =>
              setActiveInput(activeInput === "search" ? null : "search")
            }
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <FontAwesomeIcon className="mr-1.5" icon={faSearch} />
            Search
          </Button>

          <Button
            size="sm"
            variant="outlined"
            onClick={() =>
              setActiveInput(activeInput === "sort" ? null : "sort")
            }
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <FontAwesomeIcon className="mr-1.5" icon={faFilter} />
            Sort By
          </Button>

          <Button
            color="blue"
            size="sm"
            variant="gradient"
            onClick={() => showAddTaskModal.set(true)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <FontAwesomeIcon icon={faAdd} />
          </Button>
        </div>

        {activeInput === "search" && <Search />}

        {activeInput === "sort" && <Filter />}
      </div>
    </div>
  );
};
