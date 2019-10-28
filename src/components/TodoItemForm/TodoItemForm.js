import React from 'react'
import PropTypes from 'prop-types'

TodoItemForm.propTypes = {

}

function TodoItemForm (props) {
  return (
    <form method='post' action>
      <input type="text" name='todo' />
      <button>Save</button>
      <button type='reset'>Clear</button>
    </form>
  )
}

export default TodoItemForm