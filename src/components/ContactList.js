import React from 'react'
import ContactListHeader from './ContactListHeader'
import ContactListBody from './ContactListBody'

class ContactList extends React.Component {
  render () {
    const { headerItems, bodyItems } = this.props
    return (
      <React.Fragment>
        <ContactListHeader headerItems={headerItems} />
        <ContactListBody bodyItems={bodyItems} />
      </React.Fragment>
    )
  }
}

export default ContactList