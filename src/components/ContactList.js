import React from 'react'
import ContactListHeader from './ContactListHeader'
import ContactListBody from './ContactListBody'

class ContactList extends React.Component {
  render () {
    const { headerItems, bodyItems } = this.props.listData
    return (
      <div style={{ margin: '0 auto', width: '25%'}}>
        <table cellPadding={5} >
          <ContactListHeader headerItems={headerItems} />
          <ContactListBody bodyItems={bodyItems} />
        </table>
      </div>
    )
  }
}

export default ContactList