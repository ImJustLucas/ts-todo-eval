import React, {useContext} from "react";
import { TodoContext } from "../contexts/todo.context.tsx";
import { TaskPriority, TaskStatus } from "../types";

export  const Filter: React.FC = () => {
  const { priority, status } = useContext(TodoContext);
  return (
    <div className="flex items-center justify-end mr-2 relative">
      <select value={priority.get} onChange={(e) => priority.set(e.target.value as TaskPriority)}>
        <option value="">Priorities</option>
        <option value={TaskPriority.Low}>Low</option>
        <option value={TaskPriority.Medium}>Medium</option>
        <option value={TaskPriority.High}>High</option>
      </select>
      <select value={status.get} onChange={(e) => status.set(e.target.value as TaskStatus)}>
        <option value="">Statuses</option>
        <option value={TaskStatus.pending}>Pending</option>
        <option value={TaskStatus.inProgress}>In Progress</option>
        <option value={TaskStatus.done}>Done</option>
      </select>
    </div>
  );
};
export default Filter;