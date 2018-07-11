import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';


class App extends Component {
  state = {
    persons: [
        {id: 'qwqwet53', name: 'Tomek', age: 24},
        {id: 'dff21', name: 'Adam', age: 32},
        {id: 'asfg13', name: 'Ola', age: 18}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(el => {
      return el.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  
  render() {

     let persons = null;
     let btnClass = '';

     if (this.state.showPersons) {
       persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              changed={(e) => this.nameChangeHandler(e, person.id)}
              key={person.id}  
              name={person.name} 
              age={person.age}/>
          })}
        </div> 
       );
       btnClass = classes.Red;
     }

     const assignedClasses = [];

     if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
     }
     if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App!</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
