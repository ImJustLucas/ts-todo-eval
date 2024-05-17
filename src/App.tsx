import { TodoList } from "./components/TodoList";
import Search from "./components/Search.tsx";
import { TodoProvider } from "./contexts/todo.context";

export const App = () => {


  return (
    <TodoProvider>
      <div>
        <TodoList />
      </div>
    </TodoProvider>
  );
};
