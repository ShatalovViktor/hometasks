import React from 'react'
import './App.css'
import Home from './Home'
import Header from './Header'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Users from './Users/'
import Albums from './Albums/'

function App () {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route path="/albums" component={Albums}/>
          <Route path="/users" component={Users}/>
          <Route path="/" component={Home}/>
        </Switch>
    </Router>
  )
}

export default App
