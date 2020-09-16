import React, { useState, useEffect } from 'react'

export default function Form(props) {
    const { values, change, submit, disabled, errors } = props

    return(
        <form onSubmit = {submit}>
            <label>Name: 
                <input 
                    name = 'name'
                    type = 'text'
                    value = {values.name}
                    onChange = {change}
                />
            </label>
            <label>Email:
                <input 
                    name='email'
                    type='email'
                    value={values.email}
                    onChange={change}
                />
            </label>
            <label>Password:
                <input 
                    name = 'password'
                    type = 'text'
                    value = {values.password}
                    onChange = {change}
                />
            </label>
            <label>Read and agreed to Terms of Service
                <input 
                    name = 'Terms of Service'
                    type = 'checkbox'
                    checked = {values.termsOfService}
                    onChange = {change}
                />
            </label>
            <button 
            // disabled = {disabled}
            >Submit</button>
        </form>
    )

}