import React, { useEffect, useState } from 'react'
import UsersListItem from './UsersListItem'
import config from './config'
import '../common/leftMenu.css'

function UserList () {
  const [users, setUsers] = useState([])


  useEffect(() => {
    fetch(config.usersUrl)
      .then(res => res.json())
      .then(setUsers)
  }, [])


  return (
    <div className='sidenav'>
      {users.map( user => (
        <UsersListItem key={user.id} user={user}/>
      ))}
    </div>
  )
}

export default UserList