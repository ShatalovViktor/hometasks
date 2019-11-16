import React from 'react'
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core'
import PropTypes from 'prop-types'

Filters.propTypes = {
  
}

function Filters (props) {
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Filter</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >
        <MenuItem value={10}>All</MenuItem>
        <MenuItem value={20}>Completed</MenuItem>
        <MenuItem value={30}>Not completed</MenuItem>
      </Select>
    </FormControl>
  )
}

export default Filters