import React, {useContext} from "react";
import { TodoContext } from "../contexts/todo.context.tsx";
import { TaskPriority, TaskStatus } from "../types";
import {Select, Option} from "@material-tailwind/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmarkCircle} from "@fortawesome/free-solid-svg-icons";
export  const Filter: React.FC = () => {
  const { priority, status } = useContext(TodoContext);
  return (
    <div className="flex items-center justify-end">

        <div className="flex items-center justify-end mr-2 relative">
            <Select variant="outlined" label="Priority" value={priority.get} onChange={(e) => priority.set(e as TaskPriority)}>
                <Option value={TaskPriority.Low}>Low</Option>
                <Option value={TaskPriority.Medium}>Medium</Option>
                <Option value={TaskPriority.High}>High</Option>
            </Select>

            {priority.get !== '' && (
                <FontAwesomeIcon
                    className="text-gray-600 absolute mr-2 bg-white z-20 cursor-pointer transition-all ease-in-out hover:text-gray-400"
                    icon={faXmarkCircle}
                    onClick={priority.resetPriority}
                />
            )}
        </div>

        <div className="flex items-center justify-end mr-2 relative">
            <Select variant="outlined" label="Status" value={status.get} onChange={(e) => status.set(e as TaskStatus)}>
                <Option value={TaskStatus.pending}>Pending</Option>
                <Option value={TaskStatus.inProgress}>inProgess</Option>
                <Option value={TaskStatus.done}>Done</Option>
            </Select>

            {status.get !== '' && (
                <FontAwesomeIcon
                    className="text-gray-600 absolute mr-2 bg-white z-20 cursor-pointer transition-all ease-in-out hover:text-gray-400"
                    icon={faXmarkCircle}
                    onClick={status.resetStatus}
                />
            )}
        </div>
    </div>
  );
};
export default Filter;