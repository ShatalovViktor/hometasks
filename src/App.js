import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ThemeContext from './theme'
import ListContainer from './components/Todo/ListContainer'
import Form from './components/Todo/Form'
import rootReducer from './store/reducer'
import Header from './components/Header/Header'

const store = createStore(rootReducer)

function App () {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 3,
    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  }))
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={useStyles()}>
        <Container maxWidth="lg" className={useStyles.root}>
          <Header />
          <ListContainer />
          <Form />
        </Container>
      </ThemeContext.Provider>
    </Provider>
  )
}

export default App
