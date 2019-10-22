import React from 'react'
import Note from './Note/Note'
import PropTypes from 'prop-types'

class NotesList extends React.Component {
  render () {
    const { notes } = this.props
    return (
      <div>
        { notes.map((note, index )=> (
          <Note key={index} note={note} />
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