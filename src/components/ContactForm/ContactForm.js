import React from 'react'
import PropTypes from 'prop-types'
import './ContactForm.css'

class ContactForm extends React.Component {
  render () {
    return (
      <div className='form-container'>
        <form>
          <div className='formGroup'>
            <label>Surname</label>
            <input type='text' value='' />
          </div>
          <div className='formGroup'>
            <label>Name</label>
            <input type='text' value='' />
          </div>
          <div className='formGroup'>
            <label>Age</label>
            <input type='text' value='' />
          </div>
          <div className='formGroup'>
            <label>Phone</label>
            <input type='text' value='' />
          </div>
        </form>
      </div>
    )
  }
}

export default ContactForm