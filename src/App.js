import React from 'react'
import NotesList from './components/NotesList'

class App extends React.Component {

  constructor (props) {
    super(props)
    const notesFromStorage = localStorage.getItem('notes')
    this.state = {
      notes: JSON.parse(notesFromStorage) || []
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
    let notesFromStorage = JSON.parse(localStorage.getItem('notes'))
    if (notesFromStorage === null) {
      notesFromStorage = [];
    }
    notesFromStorage.push(this.getEmptyNote())
    localStorage.setItem('notes', JSON.stringify(notesFromStorage))
  }

  onDeleteNote = (note) => {
    this.setState({
      notes: this.state.notes.filter((el) => el.id !== note.id),
    })
    let notesFromStorage = JSON.parse(localStorage.getItem('notes'))
    notesFromStorage = notesFromStorage.filter((el) => el.id !== note.id)
    localStorage.setItem('notes', JSON.stringify(notesFromStorage))
  }

  render () {
    return (
      <React.Fragment>
        <div className="topnav">
          <button onClick={this.onAddClick}>Add</button>
        </div>
        <div>
          <NotesList notes={this.state.notes} onDeleteNote={this.onDeleteNote} />
        </div>
      </React.Fragment>
    )
  }
}

export default App
