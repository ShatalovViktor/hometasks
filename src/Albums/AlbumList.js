import React, { useEffect, useState } from 'react'
import config from './config'
import AlbumListItem from './AlbumListItem'
import '../common/leftMenu.css'

function AlbumList () {
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