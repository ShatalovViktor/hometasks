import React from 'react'
import List from '@material-ui/core/List'
import CommentListItem from './CommentListItem'

function CommentList ({ comments }) {
  return (
    <List>
      {comments.map(comment => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </List>
  )
}

export default CommentList