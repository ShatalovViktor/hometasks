import React from 'react'
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import Filters from '../Filters/Filters'

function Header () {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          justify="space-between"
          container
          spacing={24}
        >
          <Grid item>
            <Typography variant="h6">
              Redux todo list
            </Typography>
          </Grid>
          <Filters />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header