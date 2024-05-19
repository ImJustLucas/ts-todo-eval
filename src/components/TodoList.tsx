import { useContext } from "react";
import { TodoContext } from "../contexts/todo.context";
import { TodoItem } from "./TodoItem";
import {Header} from "./Header.tsx";

export const TodoList: React.FC = () => {
  const { tasks, query } = useContext(TodoContext);
  
  const filteredTasks = tasks.filter((task) =>
    task.description.toLowerCase().includes(query.get.toLowerCase())
  );

  return (
    <div className="max-w-xl p-8 bg-white m-auto rounded-xl shadow shadow-slate-300">
      <Header />
        <div className="my-5">
            {filteredTasks.map((task) => (
                <TodoItem key={task.id} todo={task} />
            ))}
        </div>
    </div>

  );
};
