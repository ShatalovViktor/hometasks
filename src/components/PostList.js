import React, { useEffect, useState } from 'react'
import { Grid, makeStyles, Paper } from '@material-ui/core'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

function PostList (props, context) {
  const [posts, setPosts] = useState([])
  const classes = useStyles

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {setPosts(res.data)})
  }, [])
  return (
    <>
      {posts.map(post => (
        <Grid item xs={4}>
          <Paper key={post.id} className={classes.paper}>{post.title}</Paper>
        </Grid>
      ))}
    </>
  )
}

export default PostList