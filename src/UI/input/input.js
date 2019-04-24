import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Classes from './input.css';

const input = (props) => {

    let inputElement = null;
    const inputClasses = ['form-control']

    if (props.valid) {
        inputClasses.push(' '+ Classes.invalid);
    }

    switch (props.elementType) {

        case ('input'):
            inputElement = (<input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                valid={props.value}
            />
            );
            break;
        case ('textarea'):
            inputElement = (
                <textarea
                    className="form-control"
                    {...props.elementConfig}
                    onChange={props.changed}
                    {...props}
                />);
            break;
        default:
            inputElement = (
                <input
                    className="form-control"
                    onChange={props.changed}
                    {...props.elementConfig}
                    {...props}
                />
            );
            break;

    }

    return (
        <div>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;