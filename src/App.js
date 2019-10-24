import React from 'react'
import NotesList from './components/NotesList'

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      notes: []
    }
  }

  getEmptyNote () {
    return {
      title: 'Введите название заметки',
      text: '',
      id: Date.now(),
    }
  }

  getNotesFromStorage = () => {
    const notesFromStorage = JSON.parse(localStorage.getItem('notes'))

    return notesFromStorage ? notesFromStorage : []
  }

  setNotesToStorage = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  onAddClick = () => {
    const notes = [...this.state.notes, this.getEmptyNote()]
    this.setState({
        notes: notes
      }
    )
    this.setNotesToStorage(notes)
  }

  onUpdateNote = (note) => {
    let notesFromStorage = this.getNotesFromStorage();
    notesFromStorage = notesFromStorage.map((noteStore) => noteStore.id === note.id ? note : noteStore)
    this.setNotesToStorage(notesFromStorage)
  }

  onDeleteNote = (note) => {
    this.setState({
      notes: this.state.notes.filter((el) => el.id !== note.id),
    })
    let notesFromStorage = JSON.parse(localStorage.getItem('notes'))
    notesFromStorage = notesFromStorage.filter((el) => el.id !== note.id)
    localStorage.setItem('notes', JSON.stringify(notesFromStorage))
  }

  componentDidMount () {
    this.setState({
      notes: this.getNotesFromStorage()
    })
  }

  render () {
    return (
      <React.Fragment>
        <div className="topnav">
          <button onClick={this.onAddClick}>Add</button>
        </div>
        <div>
          <NotesList notes={this.state.notes} onDeleteNote={this.onDeleteNote} onUpdateNote={this.onUpdateNote} />
        </div>
      </React.Fragment>
    )
  }
}

export default App
