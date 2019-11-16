import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Filters from './components/Filters'
import ListContainer from './components/ListContainer'
import Form from './components/Form'
import rootReducer from './store/reducer'

const store = createStore(rootReducer)

console.log(store.getState());

function App () {
  return (
    <Provider store={store}>
      <Filters />
      <ListContainer />
      <Form />
    </Provider>
  )
}

export default App
