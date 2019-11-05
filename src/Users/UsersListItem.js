import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

UsersListItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  })
}

function UsersListItem ({ user }) {
  const { url } = useRouteMatch()

  return (
    <Link to={`${url}/${user.id}`}>{user.name}</Link>
  )
}

export default UsersListItem