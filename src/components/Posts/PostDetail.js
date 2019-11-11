import React, { useEffect, useState } from 'react'
import { Typography, Grid } from '@material-ui/core'
import axios from 'axios'

function PostDetail ({ id }) {
  const [post, setPost] = useState({
    title: '',
    body: '',
  })

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setPost(res.data)
      })
  }, [])

  return (
    <>
      <Grid item xs={12}>
        <Typography variant='h3' component='h3'>
          {post.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1' align='left'>
          {post.body}
        </Typography>
      </Grid>
    </>
  )
}

export default PostDetail