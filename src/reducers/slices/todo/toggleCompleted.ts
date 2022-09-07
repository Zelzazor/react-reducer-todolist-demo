import { TodoAction, TodoStateI } from "../../../interfaces/todo.interface";

export const toggleCompleted = (state: TodoStateI, action: TodoAction) => {
    if(action.id === undefined || action.id === null) return state;
    
    const todos = state.todos.map((todo)=>{
        return todo.id === action.id ?
        {...todo, completed: !todo.completed}
        : todo
    })

    return {...state, todos};
}