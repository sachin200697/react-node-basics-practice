// This hook is like useState but instead of handling simple value, it is used to
// handle complex objects.
// It is similar to the redux.
// similar to useState it will override the existing object or value
// ES7 React/Redux/GraphQL/React-Native Snippets -> this extension to auto complete components

import React, { useReducer, useState } from "react";

function reducer(currentState, action) {
    switch(action.type){
        case 'INCREMENT':
            return {...currentState, count: currentState.count+1};
        case 'DECREMENT':
            return {...currentState, count: currentState.count -1};
        default: return currentState;
    }
}

//to create todo:
export const Actions = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    DELETE_TODO: 'DELETE_TODO'
}
function reducerForTodo(currentState = [], action) {
    switch(action.type){
        case Actions.ADD_TODO:
            return [...currentState, getTodo(action.payload)];
        case Actions.TOGGLE_TODO:
            return currentState.map(todo => {
                if(todo.id === action.payload.id) {
                    return {...todo, completed: !todo.completed};
                }
                return todo;                
            });
        case Actions.DELETE_TODO:
            console.log(currentState);
            return currentState.filter(todo=>(todo.id !== action.payload.id));
        default: return currentState;
    }
}

function getTodo(todo) {
    return {
        id: Date.now(),
        todo: todo,
        completed: false
    }
}

export default function UseReducer(props){
    const [state, dispatch] = useReducer(reducer, {count: 0, name:'Sachin'});    

    const increment = ()=>{
        dispatch({type: 'INCREMENT'});
    }
    const decrease = ()=>{
        dispatch({type: 'DECREMENT'});
    }

    const [todoItem, setTodoItem] = useState('');
    const [todos, dispatchTodo] = useReducer(reducerForTodo, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchTodo({type: Actions.ADD_TODO, payload: todoItem});
        setTodoItem('');
    }
    
    console.log('Inside component:', todos);
    return <React.Fragment>
        <button onClick={increment}>+</button>
            <span> {state.count} </span><span> {state.name} </span>
        <button onClick={decrease}>-</button>


        
        <br></br><br></br><br></br>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todoItem} onChange={e=>setTodoItem(e.target.value)} />
            </form>
            {todos && todos.map(todo=><Todo key={todo.id} todo={todo} dispatchTodo={dispatchTodo}/>)}
        </div>
    </React.Fragment>
}



function Todo({todo, dispatchTodo}) {
  const toggleTodo = ()=>{
    dispatchTodo({type: Actions.TOGGLE_TODO, payload: {id: todo.id}})
  }
  const deleteTodo = ()=>{
    dispatchTodo({type: Actions.DELETE_TODO, payload: {id: todo.id}})
  }

  const style = {
    backgroundColor: todo.completed? 'green': 'red',
    color: 'white'
  }
  return (
    <div>
       <span style={style}> {todo.todo} </span>
       <button onClick={toggleTodo}>Toggle</button>
       <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}
