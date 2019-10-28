import React from 'react'
import PropTypes from 'prop-types'
import './TodoItemForm.css'

TodoItemForm.propTypes = {}

function TodoItemForm (props) {
  function onSubmit (e) {
    e.preventDefault();
  }

  return (
    <form className='form-inline' method='post' onSubmit={onSubmit}>
      <input type="text" name='todo' />
      <button className='save'>Save</button>
      <button className='reset' type='reset'>Clear</button>
    </form>
  )
}

export default TodoItemForm