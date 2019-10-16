import React from 'react'
import PropTypes from 'prop-types'
import './ContactForm.css'
import ContactItem from '../ContactItem'

class ContactForm extends React.Component {
  onSubmitFrom = (e) => {
    e.preventDefault();
  }

  render () {
    const { contact, onSaveContact, onDeleteContact, onAddContact } = this.props
    const isEdit = !!contact.id
    return (
      <div className='form-container'>
        <form method={'post'} onSubmit={this.onSubmitFrom}>
          <div className='formGroup'>
            <label>
              Surname:
              <input type='text' defaultValue={contact.surname ? contact.surname : ''} />
            </label>

          </div>
          <div className='formGroup'>
            <label>
              Name:
              <input type='text' defaultValue={contact.name ? contact.name : ''} />
            </label>
          </div>
          <div className='formGroup'>
            <label>
              Age:
              <input type='text' defaultValue={contact.age ? contact.age : ''} />
            </label>
          </div>
          <div className='formGroup'>
            <label>
              Phone:
              <input type='text' defaultValue={contact.phone ? contact.phone : ''} />
            </label>
          </div>
          {isEdit ? (
            <React.Fragment>
              <button onClick={onSaveContact.bind(null, contact)} className='button'> Save</button>
              <button onClick={onDeleteContact.bind(null, contact)} className='deleteBtn'> Delete</button>
            </React.Fragment>
          ) : (
            <button onClick={onAddContact.bind(null, contact)} className='button'> Add </button>
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