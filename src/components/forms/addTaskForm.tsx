import { useContext, useState } from "react";
import { TodoContext } from "../../contexts/todo.context";
import { InputComponent } from "../formKit/InputComponent";
import { TaskStatus, TaskPriority } from "../../types";
import { DatePicker } from "../formKit/DatePicker";
import { SelectDefault } from "../formKit/Select";

export const AddTasksForm: React.FC = () => {
  const { showAddTaskModal, addTask } = useContext(TodoContext);

  const [taskDescription, setTaskDescription] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [priority, setPriority] = useState<TaskPriority>(TaskPriority.Low);

  const handleDateChange = (date: Date | undefined) => {
    if (date) setDate(date);
  };

  const handlePriorityChange = (priority: TaskPriority | undefined) => {
    if (priority) setPriority(priority);
  };

  const handleAddTask = () => {
    addTask({
      id: Math.floor(Math.random() * 1000),
      description: taskDescription,
      status: TaskStatus.pending,
      priority: priority,
      dueDate: date,
    });
    setTaskDescription("");
    setDate(new Date());
    setPriority(TaskPriority.Low);
    showAddTaskModal.set(false);
  };

  return (
    <div
      className="flex justify-between flex-col w-full items-start gap-4"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
        Add a task
      </div>
      <div className="flex justify-between flex-col w-full items-start gap-4">
        <InputComponent
          label="Task description"
          get={taskDescription}
          set={setTaskDescription}
        />
        <DatePicker get={date} set={handleDateChange} />
        <SelectDefault
          label="Priority"
          get={priority}
          set={handlePriorityChange}
          options={[
            { value: TaskPriority.Low, label: "Low" },
            { value: TaskPriority.Medium, label: "Medium" },
            { value: TaskPriority.High, label: "High" },
          ]}
        />
      </div>
      <div className="flex w-full flex-wrap items-center justify-between shrink-0 text-blue-gray-500">
        <button
          onClick={() => showAddTaskModal.set(false)}
          className="px-6 py-3  font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Cancel
        </button>
        <button
          onClick={handleAddTask}
          className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
