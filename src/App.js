import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  function addTodoItem (item) {
    setTodos([...todos, item])
  }

  function deleteTodoItem(item) {
    const newTodos = todos.filter(el => el !== item);
    setTodos(newTodos)
  }
  
  return (
    <div className="App">
      <Header addTodoItem={addTodoItem}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
