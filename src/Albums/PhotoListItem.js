import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

PhotoListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
}

function PhotoListItem ({photo}) {
  const { url } = useRouteMatch()

  return (
   <img src={photo.url} title={photo.title}/>
  )
}

export default PhotoListItem