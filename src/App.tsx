import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./contexts/todo.context";

export const App = () => {


  return (
    <TodoProvider>
      <div className="bg-gray-100 min-h-screen py-10">
        <TodoList />
      </div>
    </TodoProvider>
  );
};
