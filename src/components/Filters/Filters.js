import React, { useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem, makeStyles, Grid } from '@material-ui/core'
import { FILTER_ALL, FILTER_NOT_DONE, FILTER_DONE } from '../../filters'
import PropTypes from 'prop-types'

Filters.propTypes = {
  setFilter: PropTypes.func
}
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

function Filters ({ setFilter }) {
  const [filterValue, setFilterValue] = useState(FILTER_ALL)
  const classes = useStyles()

  function onChangeSelect (e) {
    setFilterValue(e.target.value)
    setFilter(e.target.value)
  }

  return (
    <Grid item>
      <FormControl className={classes.formControl}>
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select labelId="filter-label" id="filter-select" onChange={onChangeSelect} value={filterValue}>
          <MenuItem value={FILTER_ALL}>All</MenuItem>
          <MenuItem value={FILTER_DONE}>Completed</MenuItem>
          <MenuItem value={FILTER_NOT_DONE}>Not completed</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default Filters