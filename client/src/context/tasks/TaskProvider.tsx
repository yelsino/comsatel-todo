import { useEffect, useReducer } from "react"
import taskApi from "../../apis/taskApi";
import { Task } from "../../interfaces/Tasks";
import { formatDate } from "../../utils/formatDate";
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./TaskReducer";

export interface TaskState {
    isLoading: boolean;
    tasks: Task[],
    todayTasks: Task[],
    selectedTask: Task | null,
    confirmTask: Task | null,
}

const INITIAL_STATE: TaskState = {
    isLoading: true,
    tasks: [],
    todayTasks: [],
    selectedTask: null,
    confirmTask: null,
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const TaskProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(taskReducer, INITIAL_STATE)

    const getAllTasks = () => {
        taskApi.get('/').then(res => {
            dispatch({
                type: 'GET_ALL_TASKS',
                payload: res.data
            })

            dispatch({
                type: 'GET_TASKS_TODAY',
                payload: getTasksToday(res.data)
            })
        })
    }

    // tareas faltantes de hoy
    const getTasksToday = (tasks: Task[]) => {
        const missingTasks = tasks.filter(({ createdAt }) => {
            return formatDate(new Date(), 'L') === formatDate(createdAt ? createdAt : '', 'L');
        });
        return missingTasks;
    }
    // const create a task
    const createTask = async (task: Task) => {
        const newTask = await taskApi.post('/', task);
        dispatch({ type: 'CREATE_TASK', payload: newTask.data });
        getAllTasks()

    }

    const updateTask = async (task: Task) => {
        const updatedTask = await taskApi.put(`/${task.id}`, task);
        dispatch({ type: 'UPDATE_TASK', payload: updatedTask.data });
        getAllTasks()
    }

    const deleteTask = async (task: Task) => {
        await taskApi.delete(`/${task.id}`);
        dispatch({ type: 'DELETE_TASK', payload: task });
        getAllTasks()
    }

    const selectTask = (task: Task | null) => {
        dispatch({ type: 'SELECT_TASK', payload: task });
    }

    const selectConfirmTask = (task: Task | null) => {
        dispatch({ type: 'CONFIRM_TASK', payload: task });
    }


    useEffect(() => {
        getAllTasks()
    }, [])

    return (
        <TaskContext.Provider value={{
            ...state,
            dispatch,
            createTask,
            updateTask,
            deleteTask,
            selectTask,
            selectConfirmTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}
