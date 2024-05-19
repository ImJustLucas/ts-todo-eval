import { useContext } from "react";
import { AddTasksForm } from "./components/forms/addTaskForm";
import { TodoList } from "./components/TodoList";
import { TodoContext } from "./contexts/todo.context";
import { Header } from "./components/Header";
import Search from "./components/Search";

export const App = () => {
  const { showAddTaskModal } = useContext(TodoContext);
  return (
    <>
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-xl p-8 bg-white m-auto rounded-xl shadow shadow-slate-300">
          <Header />
          <Search />
          {showAddTaskModal.get ? <AddTasksForm /> : <TodoList />}
        </div>
      </div>
    </>
  );
};
