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
  
  function onDoneClick (item) {
    const itemTodo = { ...item, isDone:!item.isDone}
    const newTodos = todos.map(el => el.id === itemTodo.id ? itemTodo : el)
    setTodos(newTodos)
  }
  
  return (
    <div className="App">
      <Header addTodoItem={addTodoItem}/>
      <TodoList todos={todos} onDeleteTodo={deleteTodoItem} onDoneClick={onDoneClick}/>
    </div>
  );
}

export default App;
