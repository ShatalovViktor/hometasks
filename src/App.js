import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import { ThemeContext, themes } from './contexts/theme'

function App () {
  const [todos, setTodos] = useState([])
  const [theme, setTheme] = useState(themes.light)

  function addTodoItem (item) {
    setTodos([...todos, item])
  }

  function deleteTodoItem (item) {
    const newTodos = todos.filter(el => el !== item)
    setTodos(newTodos)
  }

  function onDoneClick (item) {
    const itemTodo = { ...item, isDone: !item.isDone }
    const newTodos = todos.map(el => el.id === itemTodo.id ? itemTodo : el)
    setTodos(newTodos)
  }

  function handleChangeTheme () {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Header addTodoItem={addTodoItem} onThemeChange={handleChangeTheme}/>
        <TodoList todos={todos} onDeleteTodo={deleteTodoItem} onDoneClick={onDoneClick} />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
