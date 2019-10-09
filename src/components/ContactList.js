import React from 'react'
import ContactListHeader from './ContactListHeader'
import ContactListBody from './ContactListBody'

class ContactList extends React.Component {
  render () {
    const { headerItems, bodyItems } = this.props.listData
    return (
      <table>
        <ContactListHeader headerItems={headerItems} />
        <ContactListBody bodyItems={bodyItems} />
      </table>
    )
  }
}

export default ContactList