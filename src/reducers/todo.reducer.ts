import { TodoAction, TodoStateI } from "../interfaces/todo.interface";
import { textChange, addTodo, removeTodo, toggleCompleted  } from "./slices";


export const initialState: TodoStateI = {
    todos: [],
    text: ""
}

export enum ActionsEnum {
    FORM_TEXT = "FORM_TEXT",
    ADD_TODO = "ADD_TODO",
    REMOVE_TODO = "REMOVE_TODO",
    TOGGLE_COMPLETED = "TOGGLE_COMPLETED"
}

export const todoReducer = (state: TodoStateI, action: TodoAction) => {
    switch(action.type) {
        case ActionsEnum.FORM_TEXT: return textChange(state, action);
        case ActionsEnum.ADD_TODO: return addTodo(state, action);
        case ActionsEnum.REMOVE_TODO: return removeTodo(state, action);
        case ActionsEnum.TOGGLE_COMPLETED: return toggleCompleted(state, action);
        default: return state;
    }
}