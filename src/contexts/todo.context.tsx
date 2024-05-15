import React, { useState } from "react";
import { ToDoItem, TaskPriority, TaskStatus } from "../types";
import fakeData from "./fakeData";
import { Log } from "../decorators/log.decorator";

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
    get: TaskPriority | '';
    set: (priority: TaskPriority | '') => void;
  };
  status: {
    get: TaskStatus | '';
    set: (status: TaskStatus | '') => void;
  };
}

const TodoContext = React.createContext<ITodoContext>({} as ITodoContext);

class TaskManager {
  todos: ToDoItem[];
  setTodos: React.Dispatch<React.SetStateAction<ToDoItem[]>>;

  constructor(
    todos: ToDoItem[],
    setTodos: React.Dispatch<React.SetStateAction<ToDoItem[]>>
  ) {
    this.todos = todos;
    this.setTodos = setTodos;

    // Binding methods to the instance
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  @Log
  addTask<T extends ToDoItem>(todo: T): void {
    this.setTodos([...this.todos, todo]);
  }

  @Log
  removeTask<T extends ToDoItem>(todo: T) {
    this.setTodos(this.todos.filter((t) => t.id !== todo.id));
  }

  updateTask = <T extends ToDoItem>(id: number, todo: T) => {
    this.setTodos(this.todos.map((t) => (t.id === id ? todo : t)));
  };
}

const TodoProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [todos, setTodos] = useState<ToDoItem[]>(fakeData);
  const [query, setQuery] = useState<string>('');
  const [priority, setPriority] = useState<TaskPriority | ''>('');
  const [status, setStatus] = useState<TaskStatus | ''>('');

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
          set: setQuery
        },
        priority: {
          get: priority,
          set: setPriority
        },
        status: {
          get: status,
          set: setStatus
        }
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
