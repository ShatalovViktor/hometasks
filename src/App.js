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
    ]
  }

  onContactClick = (contact) => {
    console.log(contact);
  }

  render () {
    return (
      <React.Fragment>
        <div className="sidebar">
          <ContactList contacts={this.state.contacts} onContactClick={this.onContactClick}/>
        </div>
        <div className="content">
          <ContactForm />
        </div>
      </React.Fragment>
    )
  }
}

export default App
