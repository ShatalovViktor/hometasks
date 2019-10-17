import React from 'react'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'

class App extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Thomas',
        surname: 'Edison',
        age: 172,
        phone: '+380321234567'
      },
      {
        id: 2,
        name: 'Karl',
        surname: 'Marx',
        age: 201,
        phone: '+380779876543'
      },
      {
        id: 3,
        name: 'Alfred',
        surname: 'Nobel',
        age: 186,
        phone: '+47299876543'
      },
      {
        id: 4,
        name: 'Isac',
        surname: 'Newton',
        age: 376,
        phone: '+380639998811'
      },
    ],
    selectedContact: {},
  }

  onContactClick = (contact) => {
    this.setState({
      selectedContact: contact,
    })
  }

  createContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    })
    this.setState({
      selectedContact: contact,
    })
  }

  onAddClick = () => {
    this.setState({
      selectedContact: {},
    })
    console.log(this.state.selectedContact)
  }

  onDeleteContact = (contact) => {
    this.setState({
      contacts: this.state.contacts.filter((el) => el !== contact),
    })
  }

  onSaveContact = (contact) => {
    this.setState({
      contacts: this.state.contacts.map((el) => {
        return el !== contact ? el : {
          id: contact.id,
          surname: contact.surname,
          name: contact.name,
          age: contact.age,
          phone: contact.phone,
        }
      })
    });
  }

  onAddContact = (contact) => {
    this.createContact({
      id: Date.now(),
      name: contact.name,
      surname: contact.surname,
      age: Number(contact.age),
      phone: contact.phone,
    })
  }

  render () {
    return (
      <React.Fragment>
        <div className="sidebar">
          <ContactList
            contacts={this.state.contacts}
            onContactClick={this.onContactClick}
          />
          <button className='button' onClick={this.onAddClick}>Add</button>
        </div>
        <div className="content">
          <ContactForm
            contact={this.state.selectedContact}
            onDeleteContact={this.onDeleteContact}
            onSaveContact={this.onSaveContact}
            onAddContact={this.onAddContact}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default App
