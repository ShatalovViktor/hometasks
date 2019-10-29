import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem/TodoItem'

TodoList.propTypes = {
  todos: PropTypes.array,  
}

function TodoList (props) {
  return (
    <div>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList