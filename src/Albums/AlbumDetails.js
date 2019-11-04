import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import config from './config'

AlbumDetails.propTypes = {
  
}

function AlbumDetails ({albumId}) {
  const [album, setAlbum] = useState({})

  useEffect(() => {
    fetch(`${config.photosUrl}/?albumId=${albumId}`)
      .then(res => res.json())
      .then(setAlbum)
  }, [])


  return (
    <div>
      <h3>Album Details</h3>
      <h4>{album.name}</h4>
    </div>
  )
}

export default AlbumDetails