export interface PropTasks {
    id: string;
    title: string;
    status: boolean;
}

export interface PropsDbTasks {
    id: string;
    day: Date;
    tasks: PropTasks[];
  }