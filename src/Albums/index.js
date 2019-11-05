import React from 'react'
import AlbumDetails from './AlbumDetails'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import AlbumList from './AlbumList'

function Albums () {

  const { url } = useRouteMatch()

  return (
    <div className='container'>
      <Switch>
        <Route path={`${url}/:id`} render={({ match }) => {
          return <AlbumDetails albumId={match.params.id} />
        }} />
        <Route path={`${url}`} render={() => {
          return <AlbumList />
        }} />
      </Switch>
      <div className='main'>
        <h2>Albums module</h2>
      </div>
    </div>
  )
}

export default Albums