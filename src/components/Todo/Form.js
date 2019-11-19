import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, ErrorMessage } from 'formik'
import { TextField, Button } from '@material-ui/core'

Form.propTypes = {
  add: PropTypes.func,
}

function Form ({ add }) {
  function validateRequireField (value) {
    return !value ? 'Message is required' : false
  }

  function onFormSubmit(values, { resetForm }){
    // onSubmit(values);
    resetForm();
  }
  return (
    <Formik
      initialValues={{title:''}}
      onSubmit={onFormSubmit}
    >
      <Form autoComplete="off">
        <div>
          <Field
            name="title"
            label="Message"
            multiline
            fullWidth
            as={TextField}
            validate={validateRequireField}
          />
          <ErrorMessage name="body" component="div" />
        </div>
        <div style={{ paddingTop: '10px' }}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </div>
      </Form>

    </Formik>
  )
}

export default Form