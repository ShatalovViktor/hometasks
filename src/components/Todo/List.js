import React from 'react'
import PropTypes from 'prop-types'

List.propTypes = {

}

function List ({todos, remove, toggle}) {
  return (
    <div>
      {todos.map(todo => (
        <div
          style={{
            textDecoration: todo.isDone ? 'line-through' : 'none'
          }}
          key={todo.id}
          onClick={toggle.bind(null, todo)}
        >
          {todo.title}
        </div>
      ))}
    </div>
  )
}

export default List