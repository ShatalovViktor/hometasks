import React from 'react'
import List from '@material-ui/core/List'
import CommentListItem from './CommentListItem'
import PropTypes from 'prop-types'

CommentListItem.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }))
}

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