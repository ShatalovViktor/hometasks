import React from 'react'

/**
 * Show header for contact list
 */
class ContactListHeader extends React.Component {
  render () {
    const { headerItems } = this.props
    return (
      <thead>
        <tr>
          { headerItems.map(item => (
            <th key={item.id}>{item.label}</th>
          ))
          }
        </tr>
      </thead>
    )
  }
}

export default ContactListHeader