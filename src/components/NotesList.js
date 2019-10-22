import React from 'react'
import Note from './Note'
import PropTypes from 'prop-types'

class NotesList extends React.Component {
  render () {
    const { notes } = this.props
    return (
      <div>
        { notes.map(note => (
          <Note key={note.id} note={note} />
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
  }).isRequired)
}

export default NotesList