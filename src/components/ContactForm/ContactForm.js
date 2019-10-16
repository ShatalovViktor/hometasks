import React from 'react'
import PropTypes from 'prop-types'
import './ContactForm.css'
import ContactItem from '../ContactItem'

class ContactForm extends React.Component {
  render () {
    const { contact } = this.props
    const isEdit = !!contact.id
    return (
      <div className='form-container'>
        <form>
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
              <button className='button'> Save </button>
              <button className='deleteBtn'> Delete </button>
            </React.Fragment>
          ):(
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
}

export default ContactForm