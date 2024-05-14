import React, { useState } from "react";
import { ToDoItem } from "../types";
import fakeData from "./fakeData";

// type filterType = "priority" | "state" | "date";

interface ITodoContext {
  tasks: ToDoItem[];
  addTask: <T extends ToDoItem>(todo: T) => void;
  removeTask: <T extends ToDoItem>(todo: T) => void;
  updateTask: <T extends ToDoItem>(id: number, todo: T) => void;
}

const TodoContext = React.createContext<ITodoContext>({} as ITodoContext);

const TodoProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [todos, setTodos] = useState<ToDoItem[]>(fakeData);

  const addTask = <T extends ToDoItem>(todo: T) => {
    setTodos([...todos, todo]);
  };

  const removeTask = <T extends ToDoItem>(todo: T) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const updateTask = <T extends ToDoItem>(id: number, todo: T) => {
    setTodos(todos.map((t) => (t.id === id ? todo : t)));
  };

  return (
    <TodoContext.Provider
      value={{
        tasks: todos,
        addTask,
        removeTask,
        updateTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
