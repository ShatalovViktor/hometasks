import React, { useState } from 'react'
import PropTypes from 'prop-types'

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    isDone: PropTypes.bool,
  }),
  onDeleteTodo: PropTypes.func,
  onDoneClick:PropTypes.func,
}

function TodoItem (props) {
  
  function onDone () {
    props.onDoneClick(props.todo)
  }
  
  function onDeleteItem () {
    props.onDeleteTodo(props.todo)
  }

  return (
    <div style={itemStyle}>
      <input type='checkbox' onClick={onDone} checked={props.todo.isDone}/>
      {props.todo.text}
      {/*<a onClick={om}>X</a>*/}
      <button onClick={onDeleteItem}>X</button>
    </div>
  )
}

const itemStyle = {
  float: 'left',
  width: '200px',
  textAlign: 'left',
  backgroundColor: 'white',
  color: 'black',
}
export default TodoItem