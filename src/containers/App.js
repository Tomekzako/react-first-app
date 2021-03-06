import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

export const AuthContext = React.createContext( false );


class App extends Component {
  state = {
    persons: [
        {id: 'qwqwet53', name: 'Tomek', age: 24},
        {id: 'dff21', name: 'Adam', age: 32},
        {id: 'asfg13', name: 'Ola', age: 18}
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }
  
  
  render() {

     let persons = null;

     if (this.state.showPersons) {
       persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>
       );
     }

    return (
      <WithClass classes={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersonHandler} />
        <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
