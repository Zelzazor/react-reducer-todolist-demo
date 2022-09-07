export interface TodoI {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodoStateI {
    todos: TodoI[];
    text: string;
}

export interface TodoAction {
    type: string;
    id?: number;
    text?: string;
}