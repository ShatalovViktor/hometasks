import React from 'react'
import PropTypes from 'prop-types'

class ContactItem extends React.Component {
  render () {
    const { contact, onContactClick } = this.props
    return (
      <li onClick={onContactClick.bind(null, contact)}>{contact.surname} {contact.name}</li>
    )
  }
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    surname: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  onContactClick: PropTypes.func,
}



export default ContactItem