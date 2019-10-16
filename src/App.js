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
    selectedContact:{},
  }

  onContactClick = (contact) => {
    this.setState({
      selectedContact:contact,
    })
  }

  onAddClick = () => {
    this.setState({
      selectedContact:{},
    })
  }

  render () {
    return (
      <React.Fragment>
        <div className="sidebar">
          <ContactList contacts={this.state.contacts} onContactClick={this.onContactClick}/>
          <button className='button' onClick={this.onAddClick}>Add</button>
        </div>
        <div className="content">
          <ContactForm contact={this.state.selectedContact}/>
        </div>
      </React.Fragment>
    )
  }
}

export default App
