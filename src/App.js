import './App.css';
import React from 'react';

function App() {
  const [value, setValue] = React.useState("");
  const [todo, setTodo] = React.useState([]);
  const addTodo = () => {
    let arr = [...todo]
    arr.push(value)
    setTodo(arr)
    setValue("")
  }
  const deleteTodo = (i) => {
    let arr = [...todo];
    arr.splice(i, 1)
    setTodo(arr)
  }
  const deleteAll = () => {
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter Your Todo"/>
      <button onClick={addTodo}>Add Item</button>
      <button onClick={deleteAll}>Delete All</button>
      <ul>
        {todo.map((v, i) => {
          return (
            <li key={i}>{v}<button className="delbn" onClick={() => deleteTodo(i)}>Delete Todo</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
