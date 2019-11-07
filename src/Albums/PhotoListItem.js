import React from 'react'
import PropTypes from 'prop-types'

PhotoListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
}

function PhotoListItem ({photo}) {
  return (
   <img src={photo.url} title={photo.title} alt={photo.title}/>
  )
}

export default PhotoListItem