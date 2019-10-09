import React from 'react'
import ContactList from './components/ContactList'

class App extends React.Component {
  state = {
    listData: {
      headerItems: [
        {
          id: 1,
          label: 'Name',
        },
        {
          id: 2,
          label: 'Surname',
        },
        {
          id: 3,
          label: 'Age',
        },
        {
          id: 4,
          label: 'Phone'
        }
      ],
      bodyItems: [
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

  }

  render () {
    return (
      <div className="App" style={{ width: '100%', position: 'relative' }}>
        <ContactList listData={this.state.listData} />
      </div>
    )
  }
}

export default App
