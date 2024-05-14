import { useContext } from "react";
import { TodoContext } from "../contexts/todo.context";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const { tasks } = useContext(TodoContext);
  return (
    <div className="my-5">
      {tasks.map((task) => (
        <TodoItem key={task.id} todo={task} />
      ))}
    </div>
  );
};
