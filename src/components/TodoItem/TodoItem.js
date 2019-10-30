import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../contexts/theme'
import './TodoItem.css'

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    isDone: PropTypes.bool,
  }),
  onDeleteTodo: PropTypes.func,
  onDoneClick: PropTypes.func,
}

function TodoItem (props) {
  const theme = useContext(ThemeContext)
  console.log(theme)

  function onDone () {
    props.onDoneClick(props.todo)
  }

  function onDeleteItem () {
    props.onDeleteTodo(props.todo)
  }

  return (
    <div className='todo-item' style={theme}>
      <span style={{ padding: '10px' }}><input type='checkbox' onClick={onDone} checked={props.todo.isDone} /></span>
      {props.todo.text}
      <span style={deleteStyle}>
      <button onClick={onDeleteItem}>X</button>
      </span>
    </div>
  )
}

const deleteStyle = {
  position: 'absolute',
  top: '0px',
  right: '6px',
}
export default TodoItem