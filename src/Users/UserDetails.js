import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import config from './config'

UserDetails.propTypes = {
  
}

function UserDetails ({userId}) {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`${config.usersUrl}/${userId}`)
      .then(res => res.json())
      .then(setUser)
  }, [])


  return (
    <div>
      <h3>User Details</h3>
      <h4>{user.name}</h4>
    </div>
  )
}

export default UserDetails