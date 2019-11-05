import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import config from './config'
import AlbumListItem from './AlbumListItem'
import '../common/leftMenu.css'

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
    <div className='sidenav'>
      {albums.map( album => (
        <AlbumListItem key={album.id} album={album}/>
      ))}
    </div>
  )
}

export default AlbumList