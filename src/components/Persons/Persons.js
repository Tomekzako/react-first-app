import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map( (person, index) => {
        return <Person
          click={() => props.clicked(index)}
          changed={(e) => props.changed(e, person.id)}
          key={person.id}  
          name={person.name}
          authenticated={props.isAuthenticated} 
          age={person.age}/>
      });

export default persons;