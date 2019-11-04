import React from 'react'
import PropTypes from 'prop-types'
import UserList from './UserList'
import UserDetails from './UserDetails'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

Users.propTypes = {}

function Users (props) {

  const { url } = useRouteMatch()

  return (
    <div>
      <h2>Users module</h2>
      <Switch>
        <Route path={`${url}/:id`} render={({ match }) => {
          return <UserDetails userId={match.params.id} />
        }} />
        <Route path={`${url}`} render={() => {
          return <UserList />
        }} />
      </Switch>
    </div>
  )
}

export default Users