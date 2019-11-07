import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import config from './config'
import PhotoList from './PhotoList'

AlbumDetails.propTypes = {
  albumId:PropTypes.string,
}

function AlbumDetails ({albumId}) {
  const [album, setAlbum] = useState({})

  useEffect(() => {
    fetch(`${config.albumsUrl}/${albumId}`)
      .then(res => res.json())
      .then(setAlbum)
  }, [])


  return (
    <div className='main'>
      <h3>{album.title}</h3>
      <PhotoList albumId={albumId}/>
    </div>
  )
}

export default AlbumDetails