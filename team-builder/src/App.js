import React, { useState } from 'react';
import './App.css';
import FormBuilder from './components/form.js';

function App() {

  const [teamMembers, setTeamMembers] = useState([
    { name: '', email: '', role: '' }
  ], []);

  // const onValueChange = event => {
  //   console.log(event.target.name);
  //   console.log(event.target.value);
  //   setTeamMembers({
  //     [event.target.name]: event.target.value
  //   }])
  // };

  const addTeamMember = event => {
    event.preventDefault();
    setTeamMembers(current => [...current, {
      name: event.target[0].value,
      email: event.target[1].value,
      role: event.target[2].value
      }
    ]);
};

  console.log(teamMembers);
  return (
    <div className="App">
     {teamMembers.slice(1).map((person, key) => (
       <h2 key={key}>Teammate {key} is {person.name}. 
       Their email is {person.email} and they are a {person.role}</h2>
     ))}
     <FormBuilder onFormSubmit={addTeamMember}/>
    </div>
  );
}

export default App;
