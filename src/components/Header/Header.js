import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import Popup from 'reactjs-popup'
import TodoItemForm from '../TodoItemForm/TodoItemForm'

Header.propTypes = {

}

function Header (props) {
  return (
    <header className="App-header">
      <Popup trigger={<button> Add todo</button>} modal closeOnDocumentClick>
        <TodoItemForm/>
      </Popup>
    </header>
  )
}

export default Header