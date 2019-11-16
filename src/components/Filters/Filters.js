import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { FILTER_ALL, FILTER_NOT_DONE, FILTER_DONE } from '../../filters'
import PropTypes from 'prop-types'

Filters.propTypes = {}

function Filters (props) {
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Filter</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >
        <MenuItem value={FILTER_ALL}>All</MenuItem>
        <MenuItem value={FILTER_DONE}>Completed</MenuItem>
        <MenuItem value={FILTER_NOT_DONE}>Not completed</MenuItem>
      </Select>
    </FormControl>
  )
}

export default Filters