export interface Tasks {
    id: number;
    text: string;
    checked: boolean;
}

export interface SetTasks {
    SetState: (newTasks: Tasks[]) => void;
}
