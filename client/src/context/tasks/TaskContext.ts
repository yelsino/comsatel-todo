import { createContext } from "react";
import { Task } from "../../interfaces/Tasks";
import { TaskAction } from "./TaskReducer";



export interface TaskContextProps {
    isLoading: boolean;
    tasks: Task[];
    todayTasks: Task[];
    selectedTask: Task | null;
    confirmTask: Task | null;
    createTask: (task: Task) => void;
    updateTask: (task: Task) => void;
    deleteTask: (task: Task) => void;
    selectTask: (task: Task | null) => void;
    selectConfirmTask: (task: Task | null) => void;
    dispatch: React.Dispatch<TaskAction>

}

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);