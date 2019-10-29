import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import Popup from 'reactjs-popup'
import TodoItemForm from '../TodoItemForm/TodoItemForm'

Header.propTypes = {
  addTodoItem: PropTypes.func,
}

function Header (props) {
  const [isDisabled, setIsDisabled] = useState(false)

  function isDisabledModal (isDisabledModal) {
    setIsDisabled(isDisabledModal)
  }

  return (
    <header className="App-header">
      <Popup
        trigger={<button>Add todo</button>}
        modal
        disabled={isDisabled}
        onClose={() => {
          isDisabledModal(false)
        }}
      >
        <TodoItemForm addTodoItem={props.addTodoItem} closePopup={isDisabledModal} />
      </Popup>
    </header>
  )
}

export default Header