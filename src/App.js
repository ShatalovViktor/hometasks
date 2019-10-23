import React from 'react'
import NotesList from './components/NotesList'

class App extends React.Component {

  constructor (props) {
    super(props)
    const notesFromStorage = localStorage.getItem('notes')
    if (notesFromStorage === null) {
      this.state = {
        notes: [this.getEmptyNote()]
      }
    } else {
      this.state = {
        notes: JSON.parse(notesFromStorage)
      }
    }

  }

  getEmptyNote () {
    return {
      title: 'Введите название заметки',
      text: '',
      id: Date.now(),
    }
  }

  onAddClick = () => {
    this.setState({
        notes: [...this.state.notes, this.getEmptyNote()]
      }
    )
    let notesFromStorage = JSON.parse(localStorage.getItem('notes'));
    notesFromStorage.push(this.getEmptyNote());
    localStorage.setItem('notes', JSON.stringify(notesFromStorage));
  }

  render () {
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
