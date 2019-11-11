import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Divider } from '@material-ui/core'

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
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={comment.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {' — ' + comment.body}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  )
}

export default CommentListItem