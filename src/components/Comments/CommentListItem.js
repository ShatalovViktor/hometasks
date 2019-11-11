import React from 'react'
import PropTypes from 'prop-types'

CommentListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
}

function CommentListItem ({comment}) {
  return (
    <div>{comment.name}</div>
  )
}

export default CommentListItem