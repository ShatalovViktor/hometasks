import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import config from './config'

UserDetails.propTypes = {
  userId: PropTypes.string,
}

function UserDetails ({userId}) {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`${config.usersUrl}/${userId}`)
      .then(res => res.json())
      .then(setUser)
  }, [])

  return (
    <div className='main'>
      <p><b>User name: </b><span>{user.name}</span></p>
      <p><b>User username: </b><span>{user.username}</span></p>
      <p><b>User email: </b><span>{user.email}</span></p>
      <p><b>User phone: </b><span>{user.phone}</span></p>
      <p><b>User website: </b><span>{user.website}</span></p>
      <p><b>User company name: </b><span>{user.company ? user.company.name : ''}</span></p>
    </div>
  )
}

export default UserDetails