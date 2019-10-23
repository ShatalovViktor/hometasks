import React from 'react'
import PropTypes from 'prop-types'
import './Note.css'

class Note extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      ...props.note
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    let notesFromStorage = JSON.parse(localStorage.getItem('notes'))
    if (notesFromStorage === null) {
      localStorage.setItem('notes', JSON.stringify([nextState]))
    } else {
      notesFromStorage = notesFromStorage.map((noteStore) => noteStore.id === nextState.id ? nextState : noteStore)
      localStorage.setItem('notes', JSON.stringify(notesFromStorage))
    }
    return true
  }

  render () {
    return (
      <div className={'note'}>
        <button className="deleteButton" onClick={this.props.onDeleteNote.bind(null, this.state)}>-</button>
        <input type='text' name='title' value={this.state.title} onChange={this.onChange} />
        <textarea name='text' value={this.state.text} onChange={this.onChange} />
      </div>
    )
  }
}

Note.propType = {
  name: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.number
}

export default Note