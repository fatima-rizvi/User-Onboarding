import React, { useDebugValue, useEffect, useState } from 'react';
import Form from './Form'
import User from './User'
import schema from './formSchema'
import axios from 'axios'
import * as yup from 'yup'
import './App.css';


//Initiaal states
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
  termsOfService: ''
}

const initialUsers = []
const initialDisabled = true

function App() {

  //States
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] =useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  //Helpers
  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([...users, res.data])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors, 
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, 
          [name]: err.errors[0]
        })
      })
  }

  //Event handlers

  const inputChange = (name, value) => {
    validate(name, value)
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

      {
        users.map(user => {
          return (
            <User details = {user} />
          )
        })
      }
    </div>
  );
}

export default App;
