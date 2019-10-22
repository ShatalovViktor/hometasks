import React from 'react'
import NotesList from './components/NotesList'

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      notes: [{
        title: 'Введите название заметки',
        text: ''
      }]
    }
  }

  getEmptyNote () {
    return {
      title: 'Введите название заметки',
      text: '',
    }
  }

  onAddClick = () => {
    this.setState({
        notes: [...this.state.notes, this.getEmptyNote()]
      }
    )
  }

  render () {
    console.log(this.state.notes)
    return (
      <React.Fragment>
        <div className="topnav">
          <button onClick={this.onAddClick}>Add</button>
        </div>
        <div>
          <NotesList notes={this.state.notes} />

        </div>
      </React.Fragment>
    )
  }
}

export default App
