import React from 'react'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'

import { deepOrange } from '@material-ui/core/colors'
import './App.css'
import PostList from './components/Posts/PostList'
import PostDetail from './components/Posts/PostDetail'
import Header from './components/common/Header'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

function App () {
  const theme = createMuiTheme({
    palette: {
      primary: deepOrange,
    },
  })

  const classes = useStyles(theme)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid container className={classes.root} spacing={3}>
          <Header />
          <Switch>
            <Route path='/posts/:id' render={({match}) => {
              return <PostDetail id={match.params.id} />
            }} />
            <Route path='/posts' component={PostList} />
            <Route path='/' render={() => <Redirect to="/posts" />} />
          </Switch>
        </Grid>
      </Router>
    </ThemeProvider>
  )
}

export default App
