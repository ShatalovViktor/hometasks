import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

Header.propTypes = {
  
}

function Header (props) {
  return (
    <header>
      <ul>
        <li><NavLink exact to="/" activeClassName='active'>Home</NavLink></li>
        <li><NavLink to="/users" activeClassName='active'>Users</NavLink></li>
        <li><NavLink to="/albums" activeClassName='active'>Albums</NavLink></li>
      </ul>
    </header>
  )
}

export default Header