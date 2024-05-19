import { TaskStatus, ToDoItem } from "../../types/index.ts";
import { Button, Checkbox } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { TodoContext } from "../../contexts/todo.context.tsx";

export const TodoItem: React.FC<{ todo: ToDoItem }> = ({ todo }) => {
  const { updateTask, removeTask } = useContext(TodoContext);

  const handleCheckboxChange = () => {
    const newStatus =
      todo.status === TaskStatus.done ? TaskStatus.inProgress : TaskStatus.done;
    updateTask(todo.id, { ...todo, status: newStatus });
  };

  const handleButtonClick = () => {
    if (todo.status !== TaskStatus.done) {
      const newStatus =
        todo.status === TaskStatus.pending
          ? TaskStatus.inProgress
          : TaskStatus.pending;
      updateTask(todo.id, { ...todo, status: newStatus });
    }
  };

  return (
    <div
      id="task"
      className={`flex justify-between items-center border-2 border-transparent transition-all ease-linear duration-150 py-1.5 px-2 border-l-4  
       ${
         todo.priority === "High"
           ? `border-l-red-300 bg-gradient-to-r from-pink-50 to-transparent hover:from-pink-100`
           : todo.priority === "Medium"
           ? `border-l-indigo-200 bg-gradient-to-r from-blue-50 to-transparent hover:from-blue-100`
           : "bg-gradient-to-r from-transparent to-transparent hover:from-gray-100"
       }
       ${
         todo.status === TaskStatus.inProgress
           ? "border-dashed border-2 border-teal-700"
           : ""
       }
      `}
    >
      <div className="inline-flex items-center space-x-2">
        <div>
          <Checkbox
            color={
              todo.priority === "High"
                ? "pink"
                : todo.priority === "Medium"
                ? "blue"
                : "gray"
            }
            defaultChecked={todo.status === TaskStatus.done}
            onChange={handleCheckboxChange}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            crossOrigin={() => {}}
          />
        </div>
        <div
          className={`px-2 ${
            todo.status === TaskStatus.done ? `line-through text-gray-400` : ""
          }`}
        >
          {todo.description || "oueee"}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          color={
            todo.status === TaskStatus.inProgress
              ? "green"
              : todo.status === TaskStatus.pending
              ? "blue"
              : "gray"
          }
          size="sm"
          onClick={handleButtonClick}
          disabled={todo.status === TaskStatus.done}
          placeholder={undefined}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {todo.status === TaskStatus.inProgress
            ? "In Progress"
            : todo.status === TaskStatus.pending
            ? "Pending"
            : "Done"}
        </Button>
        <FontAwesomeIcon
          className="text-gray-600 transition-all ease-in-out hover:text-red-500 cursor-pointer"
          icon={faTrashCan}
          onClick={() => removeTask(todo)}
        />
      </div>
    </div>
  );
};
