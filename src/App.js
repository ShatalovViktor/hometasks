import React from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Header from './Header'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Users from './Users/'

function App () {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/users" component={Users}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
