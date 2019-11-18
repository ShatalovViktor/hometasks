import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, makeStyles, Grid } from '@material-ui/core'
import { FILTER_ALL, FILTER_NOT_DONE, FILTER_DONE } from '../../filters'
import PropTypes from 'prop-types'

Filters.propTypes = {}
const useStyles = makeStyles(theme => ({
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '100%',
      },
    },
  },
}))

function Filters (props) {
  const classes = useStyles()
  return (
    <Grid item>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select className={classes.inputInput}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
        >
          <MenuItem value={FILTER_ALL}>All</MenuItem>
          <MenuItem value={FILTER_DONE}>Completed</MenuItem>
          <MenuItem value={FILTER_NOT_DONE}>Not completed</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default Filters