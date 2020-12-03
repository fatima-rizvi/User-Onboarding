import React, { useState, useEffect } from 'react'

export default function Form(props) {
    const { values, change, submit, disabled, errors } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
      }

    return(
        <form onSubmit = {onSubmit}>
            <div className = 'form-inputs'>
                <label>Name: &nbsp;
                    <input 
                        name = 'name'
                        type = 'text'
                        value = {values.name}
                        onChange = {onChange}
                    />
                </label>
                <label>Email: &nbsp;
                    <input 
                        name='email'
                        type='text'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Password: &nbsp;
                    <input 
                        name = 'password'
                        type = 'text'
                        value = {values.password}
                        onChange = {onChange}
                    />
                </label>
                <label>Read and agreed to Terms of Service &nbsp;
                    <input 
                        name = 'termsOfService'
                        type = 'checkbox'
                        checked = {values.termsOfService}
                        onChange = {onChange}
                    />
                </label>
            </div>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.termsOfService}</div>
            </div>
            <button id = 'submitBtn' disabled = {disabled}>Submit</button>
        </form>
    )

}