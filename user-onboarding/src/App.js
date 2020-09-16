import React, { useDebugValue, useEffect, useState } from 'react';
import Form from './Form'
import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

const initialUsers = []
const initialDisabled = true

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] =useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [formErrors, setFormErrors = useState(initialFormErrors)]

  //Event handlers

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submitValues = () => {
      const newUser = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        termsOfService: formValues.termsOfService
      }
      postNewUser(newUser)
  }

  //Helpers

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([...users, newUser])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const validate = (name, value) => {
    yup
      .reach(scheme,value)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors, [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0]
        })
      })
  }

  //side-effects

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div className="App">
      <Form 
      values = {formValues}
      change = {inputChange}
      submit = {submitValues}
      disabled = {disabled}
      errors = {formErrors}
      />
    </div>
  );
}

export default App;
