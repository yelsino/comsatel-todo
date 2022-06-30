export interface Task {
    id?: string;
    name: string;
    status: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

