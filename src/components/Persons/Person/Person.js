import React from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import {AuthContext} from '../../../containers/App';

const person = (props) => {
    return (
        <WithClass classes={classes.Person}> 
        <AuthContext.Consumer>
        {auth => auth ? <p>I'm authenticated!</p> : null}
        </AuthContext.Consumer>
             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
             <p>{props.children}</p>
             <input type="text" onChange={props.changed} value={props.name} />
        </WithClass>
    )
}

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default person;