export type TasksType = {
    id: number;
    text: string;
    checked: boolean;
};

export type SetTasksType = (newTasks: Tasks[]) => void;
