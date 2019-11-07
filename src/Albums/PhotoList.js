import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import config from './config'
import PhotoListItem from './PhotoListItem'

PhotoList.propTypes = {
  albumId: PropTypes.string
}

function PhotoList ({albumId}) {
  const [photos, setPhotos] = useState([])


  useEffect(() => {
    fetch(`${config.photosUrl}?albumId=${albumId}`)
      .then(res => res.json())
      .then(setPhotos)
  }, [])


  return (
    <ul>
      {photos.map( photo => (
        <PhotoListItem key={photo.id} photo={photo}/>
      ))}
    </ul>
  )
}

export default PhotoList