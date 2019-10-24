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
    const note = {
      id: this.state.id,
      title:this.state.title,
      text: this.state.text,
      [e.target.name]: e.target.value,
    }
    this.setState({
      [e.target.name]: e.target.value,
    })

    this.props.onUpdateNote(note)
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
  note: PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.number
  }),
  onDeleteNote: PropTypes.func,
  onUpdateNote: PropTypes.func,
}

export default Note