import { useContext } from "react";
import { TodoContext } from "../contexts/todo.context";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const { tasks, query, priority, status } = useContext(TodoContext);

  const filteredTasks = tasks.filter((t) => {
    const queryMatch = t.description.toLowerCase().includes(query.get.toLowerCase());
    const priorityMatch = priority.get ? t.priority === priority.get : true;
    const statusMatch = status.get ? t.status === status.get : true;
    return queryMatch && priorityMatch && statusMatch;
  });

  return (
    <div className="todo-list">
      {filteredTasks.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
