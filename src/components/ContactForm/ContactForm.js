import React from 'react'
import PropTypes from 'prop-types'
import './ContactForm.css'
import ContactItem from '../ContactItem'

class ContactForm extends React.Component {

  state = {
    surname:'',
    name: '',
    age: '',
    phone: ''
  }


  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onDeleteContact = (e) => {
    this.setState({});
    this.props.onDeleteContact(this.props.contact);
  }

  onSubmitFrom = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state);
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
                     value={contact.surname ? contact.surname : this.state.surname}
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
                value={contact.name ? contact.name : this.state.name}
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
                value={contact.age ? contact.age : this.state.age}
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
                value={contact.phone ? contact.phone : this.state.phone}
                onChange={this.onInputChange}
              />
            </label>
          </div>
          {isEdit ? (
            <React.Fragment>
              <button onClick={onSaveContact.bind(null, contact)} className='button'> Save</button>
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