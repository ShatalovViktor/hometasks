import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import UsersListItem from './UsersListItem'
import config from './config'


UserList.propTypes = {
  users: PropTypes.array
}

function UserList (props) {
  const [users, setUsers] = useState([])


  useEffect(() => {
    fetch(config.usersUrl)
      .then(res => res.json())
      .then(setUsers)
  }, [])


  return (
    <ul>
      {users.map( user => (
        <UsersListItem key={user.id} user={user}/>
      ))}
    </ul>
  )
}

export default UserList