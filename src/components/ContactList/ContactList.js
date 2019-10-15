import React from 'react'
import ContactItem from '../ContactItem'
import PropTypes from 'prop-types'
import './ContactList.css'

class ContactList extends React.Component {
  render () {
    const { contacts } = this.props
    return (
      <ul>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact}  onContactClick={this.props.onContactClick} />
        ))}
      </ul>
    )
  }
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    surname: PropTypes.string,
    name: PropTypes.string
  })).isRequired,
  onContactClick: PropTypes.func,
}

ContactList.defaultProps = {
  contacts: [],
}

export default ContactList