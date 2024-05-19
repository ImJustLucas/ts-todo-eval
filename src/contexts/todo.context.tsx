import React, { useState } from "react";
import { ToDoItem, TaskPriority, TaskStatus } from "../types";
import fakeData from "./fakeData";
import { TaskManager } from "./toto.manager";

interface ITodoContext {
  tasks: ToDoItem[];
  addTask: <T extends ToDoItem>(todo: T) => void;
  removeTask: <T extends ToDoItem>(todo: T) => void;
  updateTask: <T extends ToDoItem>(id: number, todo: T) => void;
  query: {
    get: string;
    set: (query: string) => void;
  };
  priority: {
    get: TaskPriority | "";
    set: (priority: TaskPriority | "") => void;
  };
  status: {
    get: TaskStatus | "";
    set: (status: TaskStatus | "") => void;
  };
  showAddTaskModal: {
    get: boolean;
    set: (showAddTaskModal: boolean) => void;
  };
}

const TodoContext = React.createContext<ITodoContext>({} as ITodoContext);

const TodoProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [todos, setTodos] = useState<ToDoItem[]>(fakeData);
  const [query, setQuery] = useState<string>("");
  const [priority, setPriority] = useState<TaskPriority | "">("");
  const [status, setStatus] = useState<TaskStatus | "">("");
  const [showAddTaskModal, setShowAddTaskModal] = useState<boolean>(false);

  const taskManager = new TaskManager(todos, setTodos);

  return (
    <TodoContext.Provider
      value={{
        tasks: taskManager.todos,
        addTask: taskManager.addTask,
        removeTask: taskManager.removeTask,
        updateTask: taskManager.updateTask,
        query: {
          get: query,
          set: setQuery,
        },
        priority: {
          get: priority,
          set: setPriority,
        },
        status: {
          get: status,
          set: setStatus,
        },
        showAddTaskModal: {
          get: showAddTaskModal,
          set: setShowAddTaskModal,
        },
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
