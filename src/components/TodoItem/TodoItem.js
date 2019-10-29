import React from 'react'
import PropTypes from 'prop-types'

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })
}

function TodoItem (props) {
  return (
    <div></div>
  )
}

export default TodoItem