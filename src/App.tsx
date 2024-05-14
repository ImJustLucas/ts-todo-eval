import { TodoList } from "./components/TodoList";
import Search from "./components/search";
import { TodoProvider } from "./contexts/todo.context";

export const App = () => {


  return (
    <TodoProvider>
      <div>
        <Search />
        <TodoList />
      </div>
    </TodoProvider>
  );
};
