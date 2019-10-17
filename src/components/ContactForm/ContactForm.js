import React from 'react'
import PropTypes from 'prop-types'
import './ContactForm.css'
import ContactItem from '../ContactItem'

class ContactForm extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      id: props.contact.id ? props.contact.id : '',
      surname: props.contact.surname ? props.contact.surname : '',
      name: props.contact.name ? props.contact.name : '',
      age: props.contact.age ? props.contact.age : '',
      phone: props.contact.phone ? props.contact.phone : '',
    }
  }

  componentWillReceiveProps (nextProps, nextContext) {
    this.setState({
      id: nextProps.contact.id ? nextProps.contact.id : '',
      surname: nextProps.contact.surname ? nextProps.contact.surname : '',
      name: nextProps.contact.name ? nextProps.contact.name : '',
      age: nextProps.contact.age ? nextProps.contact.age : '',
      phone: nextProps.contact.phone ? nextProps.contact.phone : '',
    })
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onDeleteContact = (e) => {
    this.props.onDeleteContact(this.props.contact)
    this.setState({
      id: '',
      surname: '',
      name: '',
      age: '',
      phone: ''
    })
  }

  onSubmitFrom = (e) => {
    e.preventDefault()
    if (!this.state.id) {
      this.props.onAddContact(this.state)
    }
  }

  render () {
    const { contact, onSaveContact } = this.props
    const isEdit = !!contact.id
    return (
      <div className='form-container'>
        <form method={'post'} onSubmit={this.onSubmitFrom}>
          <div className='formGroup'>
            <label>
              Surname:
              <input type='text'
                     name='surname'
                     value={this.state.surname}
                     onChange={this.onInputChange}
              />
            </label>

          </div>
          <div className='formGroup'>
            <label>
              Name:
              <input
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.onInputChange}
              />
            </label>
          </div>
          <div className='formGroup'>
            <label>
              Age:
              <input
                type='text'
                name='age'
                value={this.state.age}
                onChange={this.onInputChange}
              />
            </label>
          </div>
          <div className='formGroup'>
            <label>
              Phone:
              <input
                type='text'
                name='phone'
                value={this.state.phone}
                onChange={this.onInputChange}
              />
            </label>
          </div>
          {isEdit ? (
            <React.Fragment>
              <button onClick={onSaveContact.bind(null, this.state)} className='button'> Save</button>
              <button onClick={this.onDeleteContact} className='deleteBtn'> Delete</button>
            </React.Fragment>
          ) : (
            <button className='button'> Add </button>
          )}
        </form>
      </div>
    )
  }
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    surname: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    phone: PropTypes.string,
  }).isRequired,
  onSaveContact: PropTypes.func,
  onDeleteContact: PropTypes.func,
  onAddContact: PropTypes.func,
}

export default ContactForm