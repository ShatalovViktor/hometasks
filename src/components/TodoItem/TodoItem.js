import React  from 'react'
import PropTypes from 'prop-types'

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

  function onDone () {
    props.onDoneClick(props.todo)
  }

  function onDeleteItem () {
    props.onDeleteTodo(props.todo)
  }

  return (
    <div style={itemStyle}>
      <span style={{ padding: '10px' }}><input type='checkbox' onClick={onDone} checked={props.todo.isDone} /></span>
      {props.todo.text}
      <span style={deleteStyle}>
      <button onClick={onDeleteItem}>X</button>
      </span>
    </div>
  )
}

const itemStyle = {
  float: 'left',
  width: '200px',
  textAlign: 'left',
  backgroundColor: 'white',
  color: 'black',
  padding: '20px',
  border: '1px solid black',
  position: 'relative',
  margin: '5px 10px',
}

const deleteStyle = {
  position: 'absolute',
  top: '0px',
  right: '6px',
}
export default TodoItem