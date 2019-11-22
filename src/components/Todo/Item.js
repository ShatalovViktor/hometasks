import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Grid, Paper, Checkbox, FormControlLabel, Chip } from '@material-ui/core'
import ThemeContext from '../../theme'

Item.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    isDone: PropTypes.bool
  }),
  onToggle: PropTypes.func,
  onDelete: PropTypes.func
}

function Item ({ todo, onToggle, onDelete }) {
  const theme = useContext(ThemeContext)
  return (
    <Grid item xs={4}>
      <Paper key={todo.id} className={theme.paper}>
        <FormControlLabel
          control={
            <Checkbox
              checked={todo.isDone}
              onChange={onToggle.bind(null, todo.id)}
              value={todo.id} inputProps={{
              'aria-label': 'primary checkbox',
            }}
            />
          }
          label={todo.title}
        />
        <Chip onDelete={onDelete.bind(null, todo.id)} color='secondary' />
      </Paper>
    </Grid>
  )
}

export default Item