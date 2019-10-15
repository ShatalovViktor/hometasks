import React from 'react'
import PropTypes from 'prop-types'
import './ContactForm.css'
import FormControllers from './FormControllers'

class ContactForm extends React.Component {
  render () {
    return (
      <div className='form-container'>
        <form>
          <div className='formGroup'>
            <label>
              Surname:
              <input type='text' defaultValue='' />
            </label>

          </div>
          <div className='formGroup'>
            <label>
              Name:
              <input type='text' defaultValue='' />
            </label>
          </div>
          <div className='formGroup'>
            <label>
              Age:
              <input type='text' defaultValue='' />
            </label>
          </div>
          <div className='formGroup'>
            <label>
              Phone:
              <input type='text' defaultValue='' />
            </label>
          </div>
          <FormControllers />
        </form>
      </div>
    )
  }
}

export default ContactForm