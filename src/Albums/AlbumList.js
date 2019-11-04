import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import config from './config'
import AlbumListItem from './AlbumListItem'

AlbumList.propTypes = {
  albums: PropTypes.array
}

function AlbumList (props) {
  const [albums, setAlbums] = useState([])


  useEffect(() => {
    fetch(config.albumsUrl)
      .then(res => res.json())
      .then(setAlbums)
  }, [])


  return (
    <ul>
      {albums.map( album => (
        <AlbumListItem key={albums.id} album={album}/>
      ))}
    </ul>
  )
}

export default AlbumList