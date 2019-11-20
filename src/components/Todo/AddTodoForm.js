import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, ErrorMessage, Form} from 'formik'
import { Button, Input, InputLabel, FormControl } from '@material-ui/core'

AddTodoForm.propTypes = {
  add: PropTypes.func,
}

function AddTodoForm ({ add }) {
  function validateRequireField (value) {
    return !value ? 'Message is required' : false
  }

  function onFormSubmit(values, { resetForm }){
    add(values);
    resetForm();
  }
  return (
    <Formik initialValues={{ title: '' }} onSubmit={onFormSubmit}>
        <Form>
          <FormControl>
            <InputLabel htmlFor="name">Todo</InputLabel>
            <Field id="name" type="text" name="title" validate={validateRequireField}>
              {({ field }) => <Input {...field} />}
            </Field>
            <ErrorMessage name="title" component="div" />
          </FormControl>
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </Form>
    </Formik>
  )
}

export default AddTodoForm