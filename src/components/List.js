import React from 'react'
import PropTypes from 'prop-types'

List.propTypes = {

}

function List ({todos, remove, toggle}) {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} onClick={remove.bind(null, todo.id)}>{todo.title}</div>
      ))}
    </div>
  )
}

export default List