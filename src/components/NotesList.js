import React from 'react'
import Note from './Note/Note'
import PropTypes from 'prop-types'

class NotesList extends React.Component {
  render () {
    const { notes } = this.props
    return (
      <div>
        { notes.map((note)=> (
          <Note key={note.id} note={note} onDeleteNote={this.props.onDeleteNote} onUpdateNote={this.props.onUpdateNote} />
        )) }
      </div>
    )
  }
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    text: PropTypes.string,
  }).isRequired),
  onDeleteNote: PropTypes.func,
  onUpdateNote: PropTypes.func,
}

export default NotesList