import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './TodoItemForm.css'

TodoItemForm.propTypes = {
  addTodoItem: PropTypes.func,
  closePopup: PropTypes.func,
}

function TodoItemForm (props) {
  const [todoItem, setTodoItem] = useState({})

  function onSubmit (e) {
    e.preventDefault()
    props.addTodoItem(todoItem)
    props.closePopup(true)
  }

  function handleChange (e) {
    setTodoItem({ id: Date.now(), text: e.target.value })
  }

  function handleReset() {
    setTodoItem({})
  }

  return (
    <form className='form-inline' method='post' onSubmit={onSubmit}>
      <input type="text" name='todo' onChange={handleChange} value={todoItem.text} />
      <button className='save'>Save</button>
      <button className='reset' type='reset' onClick={handleReset}>Clear</button>
    </form>
  )
}

export default TodoItemForm