export interface Task {
    id: string;
    name: string;
    status: boolean;
    createdAt: Date;
}

export interface PropsDbTasks {
    id: string;
    day: Date;
    tasks: Task[];
}