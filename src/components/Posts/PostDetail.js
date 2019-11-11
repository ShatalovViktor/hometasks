import React, { useEffect, useState } from 'react'
import { Typography, Grid } from '@material-ui/core'
import axios from 'axios'
import CommentList from '../Comments/CommentList'
import CommentForm from '../Comments/CommentForm'

function PostDetail ({ id }) {
  const [post, setPost] = useState({
    title: '',
    body: '',
  })

  const [comments, setComments] = useState([])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setPost(res.data)
      })
  }, [id])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res => {
        setComments(res.data)
      })
  }, [id])

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
      <Grid item xs={10}>
        <CommentList comments={comments} />
      </Grid>
      <Grid item xs={10}>
        <CommentForm/>
      </Grid>
    </>
  )
}

export default PostDetail