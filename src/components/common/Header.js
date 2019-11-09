import React from 'react'
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core'

function Header () {
  return (
    <Grid item xs={12}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Posts
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  )
}

export default Header