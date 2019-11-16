import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Filters from './components/Filters/Filters'
import ListContainer from './components/Todo/ListContainer'
import Form from './components/Todo/Form'
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
