import React from 'react';

const FormBuilder = (props) => {
    return (
    <form onSubmit={props.addTeamMember} >
        <input
            placeholder='Enter Name'
            name='name'
            value={props.values.name}
            onChange={props.onValueChange}
        />
        <input
            placeholder='Email'
            name='email'
            value={props.values.email}
            onChange={props.onValueChange}
        />
        <input
            placeholder='Role'
            name='role'
            value={props.values.role}
            onChange={props.onValueChange}
        />
        <input type='submit'/>
    </form>
)};

export default FormBuilder; 