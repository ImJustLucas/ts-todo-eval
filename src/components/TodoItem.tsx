import {TaskStatus, ToDoItem} from "../types";
import {Checkbox} from "@material-tailwind/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import React, {useContext} from "react";
import {TodoContext} from "../contexts/todo.context.tsx";

export const TodoItem: React.FC<{ todo: ToDoItem }> = ({ todo }) => {
  const { updateTask } = useContext(TodoContext);

  const handleStatusChange = () => {
    const newStatus = todo.status === TaskStatus.pending ? TaskStatus.inProgress : TaskStatus.pending;
    updateTask(todo.id, { ...todo, status: newStatus });
  };

  return (
    <div
      id="task"
      className={`flex justify-between items-center transition-all ease-linear duration-150 border-b border-slate-200 py-1.5 px-2 border-l-4 border-l-transparent ${
        todo.priority === "High"
          ? `border-l-red-300 bg-gradient-to-r from-pink-50 to-transparent hover:from-pink-100`
          : todo.priority === "Medium"
          ? `border-l-indigo-200 bg-gradient-to-r from-blue-50 to-transparent hover:from-blue-100`
          : "bg-gradient-to-r from-transparent to-transparent hover:from-gray-100"
      }`}
    >
      <div className="inline-flex items-center space-x-2">
        <div>
          <Checkbox color={todo.priority === "High" ? "pink" : todo.priority === "Medium" ? "blue" : "gray"}
                    defaultChecked={todo.status === "InProgress"} onChange={handleStatusChange} />
        </div>
        <div className={`px-2 ${
            todo.status === "InProgress"
                ? `line-through text-gray-400`
                    : ""
        }`}>
          {todo.description || "oueee"}
        </div>
      </div>
      <div>
        <FontAwesomeIcon className="text-gray-600 transition-all ease-in-out hover:text-red-500 cursor-pointer" icon={faTrashCan}/>
      </div>
    </div>
  );
};
