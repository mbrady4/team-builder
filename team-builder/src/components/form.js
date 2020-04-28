import React from 'react';

const FormBuilder = (props) => {
    return (
    <form onSubmit={props.onFormSubmit} >
        <input
            placeholder='Enter Name'
            name='name'
        />
        <input
            placeholder='Email'
            name='email'
        />
        <input
            placeholder='Role'
            name='role'
        />
        <input type='submit'/>
    </form>
)};

export default FormBuilder; 