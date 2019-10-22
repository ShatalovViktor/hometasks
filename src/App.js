import React from 'react'
import NotesList from './components/NotesList'

class App extends React.Component {

  render () {
    return (
      <React.Fragment>
        <div className="topnav">
          <button>Add</button>
        </div>
        <div>
          <NotesList/>
        </div>
      </React.Fragment>
    )
  }
}

export default App
