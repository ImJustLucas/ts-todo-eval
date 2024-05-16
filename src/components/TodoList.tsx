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
    <div className="max-w-lg p-8 bg-white m-auto rounded-xl shadow shadow-slate-300">

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium">Tasks list</h1>
        <Header />
      </div>

        <div className="my-5">
            {filteredTasks.map((task) => (
                <TodoItem key={task.id} todo={task} />
            ))}
        </div>
    </div>

  );
};
