import { TodoList } from "./components/TodoList";
import Search from "./components/search";
import { TodoProvider } from "./contexts/todo.context";
import FilterComponent from "./components/FilterComponent"

export const App = () => {

  return (
    <TodoProvider>
      <div className="app">
        <Search />
        <FilterComponent />
        <TodoList />
      </div>
    </TodoProvider>
  );
};
