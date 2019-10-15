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
          <ContactItem contact={contact} />
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
}

ContactList.defaultProps = {
  contacts: [],
}

export default ContactList