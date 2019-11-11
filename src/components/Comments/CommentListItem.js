import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemText, Typography, Divider } from '@material-ui/core'

CommentListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
  userId: PropTypes.number
}

function CommentListItem ({ comment }) {
  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={comment.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {comment.body}
              </Typography>
              {' — ' + comment.email}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  )
}

export default CommentListItem