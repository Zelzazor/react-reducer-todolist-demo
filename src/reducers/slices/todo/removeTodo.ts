import { TodoAction, TodoStateI } from "../../../interfaces/todo.interface";

export const removeTodo = (state: TodoStateI, action: TodoAction) => {
    
    if(action.id === undefined || action.id === null) return state;
    const newTodos = state.todos.filter((todo) => todo.id !== action.id);


    return {...state, todos: newTodos};

}