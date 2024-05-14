export enum TaskPriority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export enum TaskStatus {
  pending = "ToDo",
  inProgress = "InProgress",
  done = "Done",
}

export type DueDate = {
  day: number;
  month: number;
  year: number;
};

export interface ToDoItem {
  id: number;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: Date;
}
