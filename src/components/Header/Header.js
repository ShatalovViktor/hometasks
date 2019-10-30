import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import Popup from 'reactjs-popup'
import TodoItemForm from '../TodoItemForm/TodoItemForm'
import { ThemeContext } from '../../contexts/theme'

Header.propTypes = {
  addTodoItem: PropTypes.func,
  onThemeChange: PropTypes.func,
}

function Header (props, context) {
  const [isDisabled, setIsDisabled] = useState(false)
  const theme = useContext(ThemeContext)

  function isDisabledModal (isDisabledModal) {
    setIsDisabled(isDisabledModal)
  }

  return (
    <header className="App-header" style={theme}>
      <span className='theme-label'>Light</span>
      <label className="switch">
        <input type="checkbox" onClick={props.onThemeChange}/>
          <span className="slider round"></span>
      </label>
      <span className='theme-label'>Dark</span>
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