import React, { useState } from 'react';

function DataLazyLoading() {
    const [todos, setTodos] = useState(null);
    const loadDataLazy = ()=>{
        import('./data/data').then(module=>{
            setTodos(module.todos)
        })
      };
  return (
    <div>
      <h2>Todos</h2>
      <button onClick={loadDataLazy}>
        Load 
      </button>
      {
        todos? todos.map(todo=><p key={todo.id}>{todo.title}</p>):null
      }
    </div>
  );
}

export default DataLazyLoading;
