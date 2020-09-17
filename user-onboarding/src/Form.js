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
            <button disabled = {disabled}>Submit</button>
            <div className='errors'>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.role}</div>
                <div>{errors.civil}</div>
            </div>
            <div className = 'form-inputs'>
                <label>Name: &nbsp;
                    <input 
                        name = 'name'
                        type = 'text'
                        value = {values.name}
                        onChange = {onChange}
                    />
                </label>
                <label>Email:
                    <input 
                        name='email'
                        type='text'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Password:
                    <input 
                        name = 'password'
                        type = 'text'
                        value = {values.password}
                        onChange = {onChange}
                    />
                </label>
                <label>Read and agreed to Terms of Service
                    <input 
                        name = 'termsOfService'
                        type = 'checkbox'
                        checked = {values.termsOfService}
                        onChange = {onChange}
                    />
                </label>
            </div>
        </form>
    )

}