import React from 'react'
import PropTypes from 'prop-types'
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'

PostListItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  })
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const classes = useStyles

function PostListItem ({post}) {
  return (
    <Grid item xs={4}>
      <Paper key={post.id} className={classes.paper}>
        <Typography variant="h5" component="h3">
          {post.title}
        </Typography>
        <Typography component="p">
          {post.body.substring(0, 100)}
        </Typography>
      </Paper>
    </Grid>
  )
}

export default PostListItem