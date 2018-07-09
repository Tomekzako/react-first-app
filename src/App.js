import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
        {name: 'Tomek', age: 25},
        {name: 'Adam', age: 32},
        {name: 'Ola', age: 18}
    ]
  }
  
  
  render() {

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button>Switch name</button>
        <Person name ={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name ={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Table Tennis</Person>
        <Person name ={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
