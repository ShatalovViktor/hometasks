import React from 'react'
import { NavLink } from 'react-router-dom'

function Header () {
  return (
    <header className='topnav'>
      <NavLink exact to="/" activeClassName='active'>Home</NavLink>
      <NavLink to="/users" activeClassName='active'>Users</NavLink>
      <NavLink to="/albums" activeClassName='active'>Albums</NavLink>
    </header>
  )
}

export default Header