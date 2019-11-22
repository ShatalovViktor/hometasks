import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import ThemeContext from '../../theme'
import Item from './Item'

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    isDone: PropTypes.bool
  })),
  remove: PropTypes.func,
  toggle: PropTypes.func,
}

function List ({ todos, remove, toggle }) {
  const theme = useContext(ThemeContext)
  return (
    <Grid container className={theme.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {todos.map(todo => (
            <Item key={todo.id} todo={todo} onToggle={toggle} onDelete={remove}/>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default List