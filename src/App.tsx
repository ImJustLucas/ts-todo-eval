import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./contexts/todo.context";

export const App = () => {


  return (
    <TodoProvider>
      <div className="bg-gray-100 min-h-screen pt-16">
        <TodoList />
      </div>
    </TodoProvider>
  );
};
