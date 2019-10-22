import React from 'react'
import PropTypes from 'prop-types'

class Note extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ...props.note
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <React.Fragment>
        <input type='text' name='title' value={this.state.title} onChange={this.onChange} />
        <textarea name='text' value={this.state.text} onChange={this.onChange} />
      </React.Fragment>
    )
  }
}

Note.propType = {
  name: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.number
}

export default Note