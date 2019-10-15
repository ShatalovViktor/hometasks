import React from 'react'
import PropTypes from 'prop-types'

class ContactItem extends React.Component {
  render () {
    const { contact } = this.props
    return (
      <li>{contact.surname} {contact.name}</li>
    )
  }
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    surname: PropTypes.string,
    name: PropTypes.string
  }).isRequired
}



export default ContactItem