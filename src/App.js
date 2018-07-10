import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
        {name: 'Tomek', age: 24},
        {name: 'Adam', age: 32},
        {name: 'Ola', age: 18}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (e) => {
    this.setState({
      persons: [
        {name: 'Tomek', age: 25},
        {name: e.target.value, age: 32},
        {name: 'Ola', age: 21}
    ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

     let persons = null;

     if (this.state.showPersons) {
       persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}  
              name={person.name} 
              age={person.age}/>
          })}
        </div> 
       )
     }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
