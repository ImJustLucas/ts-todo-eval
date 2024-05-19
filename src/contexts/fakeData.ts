import { TaskPriority, TaskStatus, ToDoItem } from "../types";

JSON;

const fakeData: ToDoItem[] = [
  {
    id: 1,
    description: "Description 1",
    status: TaskStatus.pending,
    priority: TaskPriority.Low,
    dueDate: new Date("2021-12-31"),
  },
  {
    id: 2,
    description: "Description 2",
    status: TaskStatus.inProgress,
    priority: TaskPriority.Medium,
    dueDate: new Date("2021-12-31"),
  },
];

export default fakeData;
