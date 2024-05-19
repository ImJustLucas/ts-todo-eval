import { useContext } from "react";
import { TodoContext } from "../contexts/todo.context";
import { TodoItem } from "./todos/TodoItem";

export const TodoList: React.FC = () => {
  const { tasks, query, priority, status } = useContext(TodoContext);

  const filteredTasks = tasks.filter((t) => {
    const queryMatch = t.description
      .toLowerCase()
      .includes(query.get.toLowerCase());
    const priorityMatch = priority.get ? t.priority === priority.get : true;
    const statusMatch = status.get ? t.status === status.get : true;
    return queryMatch && priorityMatch && statusMatch;
  });

  return (
    <div className="todo-list">
      {filteredTasks.length === 0 && (
        <div className="text-center text-gray-400 pt-10">No tasks found</div>
      )}
      {filteredTasks.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
