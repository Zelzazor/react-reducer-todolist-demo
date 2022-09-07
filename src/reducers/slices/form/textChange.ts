import { TodoAction, TodoStateI } from "../../../interfaces/todo.interface";

export const textChange = (state: TodoStateI, action: TodoAction) => {
    if(action.text === undefined || action.text === null) return state;

    return {...state, text: action.text}
}