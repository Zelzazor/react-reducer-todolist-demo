import { TodoAction, TodoI, TodoStateI } from "../../../interfaces/todo.interface";

export const addTodo = (state: TodoStateI, action: TodoAction) => {
    if(!action.text) return state;

    const newTodo: TodoI = {
        id: state.todos.length,
        text: action.text,
        completed: false
    }

    const newTodos = state.todos.concat(newTodo);

    return {...state, todos: newTodos, text: ""};
}