import { ChangeEvent, FormEvent, useReducer } from 'react'
import { ActionsEnum, initialState, todoReducer } from './reducers/todo.reducer'


function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: ActionsEnum.ADD_TODO, text: state.text });
  }

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionsEnum.FORM_TEXT,
      text: e.target.value
    })
  }

  return (
    <div className="container mt-4">
      <h1>Todo-list</h1>
      <form onSubmit={addTodo}>
        <input type="text" name="todo" className="form-control" autoComplete='off' value={state.text} onChange={changeText} />
      </form>
      <div className="mt-4">
        {state.todos.map((todo) => (
          <div className="my-3 border py-3 px-3 d-flex justify-content-between" key={todo.id}>
            <h3>{todo.text}</h3>
            <div className="actions d-flex">
              <input type="checkbox" className='me-2' onChange={() => dispatch({type: ActionsEnum.TOGGLE_COMPLETED, id: todo.id})} checked={todo.completed} />
              <button className="btn btn-danger" onClick={() => dispatch({ type: ActionsEnum.REMOVE_TODO, id: todo.id })}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
