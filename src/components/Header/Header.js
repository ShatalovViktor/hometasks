import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import PropTypes from 'prop-types'
import Filters from '../Filters/Filters'

function Header () {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Redux todo list
        </Typography>
        <Filters/>
      </Toolbar>
    </AppBar>
  )
}

export default Header