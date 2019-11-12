import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button, Input, InputLabel, FormControl } from '@material-ui/core'
import api from '../../api'

CommentForm.propTypes = {
  addCommentCallback: PropTypes.func
}

function CommentForm ({ addCommentCallback }) {

  function validateEmail (value) {
    let error
    if (!value) {
      error = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address'
    }
    return error
  }

  function validateRequiredField (value) {
    let error
    if (!value) {
      error = 'Required'
    }
    return error
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', body: '' }}
      onSubmit={(values, { setSubmitting }) => {
        api.post('comments', { values }).then(
          res => {
            // Оставил что бы можно было посмотреть что действительно коммент добавился
            console.log(res)
            setSubmitting(false)
            addCommentCallback({
              id: res.data.id,
              name: res.data.values.name,
              email: res.data.values.email,
              body: res.data.values.body,
            })
          }
        )
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Field id="name" type="text" name="name" validate={validateRequiredField}>
              {({ field }) => <Input {...field} />}
            </Field>
            <ErrorMessage name="name" component="div" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Field id="email" type="email" name="email" validate={validateEmail}>
              {({ field }) => <Input {...field} />}
            </Field>
            <ErrorMessage name="email" component="div" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="body">Comment</InputLabel>
            <Field id="body" type="text" name="body" validate={validateRequiredField}>
              {
                ({ field, form, meta }) => <Input {...field}
                                                  multiline={true}
                                                  rows={1}
                                                  rowsMax={4}
                />
              }
            </Field>
            <ErrorMessage name="body" component="div" />
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            Send
          </Button>

        </Form>
      )}
    </Formik>
  )
}

export default CommentForm