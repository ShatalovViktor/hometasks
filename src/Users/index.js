import React from 'react'
import UserList from './UserList'
import UserDetails from './UserDetails'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

function Users () {

  const { url } = useRouteMatch()

  return (
    <div className='container'>
      <Switch>
        <Route path={`${url}/:id`} render={({ match }) => {
          return <UserDetails userId={match.params.id} />
        }} />
        <Route path={`${url}`} render={() => {
          return <UserList />
        }} />
      </Switch>
      <div className='main'>
        <h2>Users module</h2>
      </div>
    </div>
  )
}

export default Users