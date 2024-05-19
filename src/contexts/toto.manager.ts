import { Log } from "../decorators/log.decorator";
import { ToDoItem } from "../types";

export class TaskManager {
  todos: ToDoItem[];
  setTodos: React.Dispatch<React.SetStateAction<ToDoItem[]>>;

  constructor(
    todos: ToDoItem[],
    setTodos: React.Dispatch<React.SetStateAction<ToDoItem[]>>
  ) {
    this.todos = todos;
    this.setTodos = setTodos;

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
