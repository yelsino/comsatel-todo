import { Task } from "../../interfaces/Tasks";
import { TaskState } from "./TaskProvider";


export type TaskAction =
    | { type: 'GET_TASKS_TODAY'; payload: Task[] }
    | { type: 'GET_ALL_TASKS'; payload: Task[] }
    | { type: 'CREATE_TASK'; payload: Task }
    | { type: 'DELETE_TASK'; payload: Task }
    | { type: 'UPDATE_TASK'; payload: Task }
    | { type: 'SELECT_TASK'; payload: Task | null }
    | { type: 'CONFIRM_TASK'; payload: Task | null }


export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
    switch (action.type) {

        case 'GET_ALL_TASKS':
            return {
                ...state,
                isLoading: true,
                tasks: action.payload
            }
        case 'GET_TASKS_TODAY':
            return {
                ...state,
                todayTasks: action.payload
            }
        case 'CREATE_TASK':
            return {
                ...state,
                todayTasks: [action.payload, ...state.todayTasks,]
            }
        case 'UPDATE_TASK':
            return {
                ...state,
                todayTasks: state.todayTasks.map(task => task.id === action.payload.id ? action.payload : task)
            }
        case 'DELETE_TASK':
            return {
                ...state,
                todayTasks: state.todayTasks.filter(task => task.id !== action.payload.id)
            }

        case 'SELECT_TASK':
            return {
                ...state,
                selectedTask: action.payload
            }

        case 'CONFIRM_TASK':
            return {
                ...state,
                confirmTask: action.payload
            }


        default:
            return state;
    }
}

