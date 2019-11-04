import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

AlbumListItem.propTypes = {
  
}

function AlbumListItem ({album}) {
  const { url } = useRouteMatch()

  return (
    <li>
      <Link to={`${url}/${album.id}`}>{album.title}</Link>
    </li>
  )
}

export default AlbumListItem