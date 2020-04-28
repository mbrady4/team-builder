import React, { useState } from 'react';
import './App.css';
import FormBuilder from './components/form.js';

function App() {

  const [teamMembers, setTeamMembers] = useState([
    { name: '', email: '', role: '' }
  ] );

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    role: '',
    key: -1
  })

  const onValueChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  // const onValueChange = event => {
  //   console.log(event.target.name);
  //   console.log(event.target.value);
  //   setTeamMembers({
  //     [event.target.name]: event.target.value
  //   }])
  // };

  const addTeamMember = (event) => {
    event.preventDefault();
    console.log(formValues.key)
    if (formValues.key != -1) {
      console.log("modiying")
      const modifiedMember = {
        name: formValues.name,
        email: formValues.email,
        role: formValues.role
      }
      let temp = teamMembers;
      console.log(temp);
      temp[formValues.key] = modifiedMember;
      setTeamMembers(temp)
    }
    else {
      console.log('adding')
      setTeamMembers(current => [...current, {
        name: formValues.name,
        email: formValues.email,
        role: formValues.role
        }
      ]);
    }
    console.log(teamMembers);
    resetFormValues();
  };

  const resetFormValues = () => {
    setFormValues({
      name: '',
      email: '',
      role: '',
      key: -1
    });
  }

  const memberToEdit = (person, key) => {
    setFormValues({
      name: person.name,
      email: person.email,
      role: person.role,
      key: key
    });
  }

  return (
    <div className="App">
     {teamMembers.slice(1).map((person, key) => (
       <div>
        <h2 key={key}>Teammate {key} is {person.name}. 
        Their email is {person.email} and they are a {person.role}</h2>
        <button onClick={() => memberToEdit(person, key+1)}>Edit</button>
        </div>
     ))}
     <FormBuilder values={formValues} 
                  onValueChange={onValueChange} 
                  addTeamMember={addTeamMember} 
      />
    </div>
  );
}

export default App;
