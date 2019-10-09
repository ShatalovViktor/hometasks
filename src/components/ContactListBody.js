import React from 'react'

/**
 * Show body for contact list
 */
class ContactListBody extends React.Component {
  render () {
    const { bodyItems } = this.props
    return (
      <tbody>
      { bodyItems.map(item => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.surname}</td>
          <td>{item.age}</td>
          <td>{item.phone}</td>
        </tr>
      ))
      }
      </tbody>
    )
  }
}

export default ContactListBody