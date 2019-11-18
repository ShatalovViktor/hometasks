import React from 'react'
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import FilterContainer from '../Filters/FilterContainer'

function Header () {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          justify="space-between"
          container
          spacing={10}
        >
          <Grid item>
            <Typography variant="h6">
              Redux todo list
            </Typography>
          </Grid>
          <FilterContainer />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header