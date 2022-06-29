export interface Task {
    id?: string;
    name: string;
    status: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

export interface PropsDbTasks {
    id: string;
    day: Date;
    tasks: Task[];
}