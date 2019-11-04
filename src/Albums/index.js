import React from 'react'
import PropTypes from 'prop-types'
import UserList from './UserList'
import config from './config'
import UserDetails from './UserDetails'
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom'

Albums.propTypes = {}

function Albums (props) {

  const { url } = useRouteMatch()

  // useEffect(async () => {
  //   const res = await fetch(config.usersUrl);
  //   const data = await res.json();
  //   setUsers(data);
  // }, [])

  return (
    <div>
      <h2>Albums module</h2>
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

export default Albums