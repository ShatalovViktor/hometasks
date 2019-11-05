import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

AlbumListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
}

function AlbumListItem ({ album }) {
  const { url } = useRouteMatch()

  return (
    <Link to={`${url}/${album.id}`}>{album.title}</Link>
  )
}

export default AlbumListItem