import { useContext } from "react";
import { TodoList } from "./components/TodoList";
import { TodoContext } from "./contexts/todo.context";
import { TaskPriority, TaskStatus } from "./types";

export const App = () => {
  const { addTask } = useContext(TodoContext);

  const handleOnClick = () => {
    addTask({
      id: Math.floor(Math.random() * 100),
      description: "New task",
      status: TaskStatus.pending,
      priority: TaskPriority.Low,
      dueDate: new Date(),
    });
  };
  return (
    <div>
      <button onClick={handleOnClick}>Add a task</button>
      <TodoList />
    </div>
  );
};
