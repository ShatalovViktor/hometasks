import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem/TodoItem'

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, text: PropTypes.string})),
  onDeleteTodo: PropTypes.func,
  onDoneClick: PropTypes.func,
}

function TodoList (props) {
  return (
    <div>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={props.onDeleteTodo} onDoneClick={props.onDoneClick}/>
      ))}
    </div>
  )
}

export default TodoList