import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


const input = (props) => {

    let inputElement = null;

    switch (props.inputtype) {

        case ('input'):
            inputElement = <input className="form-control" onChange={props.changed} {...props} />;
            break;
        case ('textarea'):
            inputElement = <textarea className="form-control" onChange={props.changed} {...props} />;
            break;
        default:
            inputElement = <input className="form-control" onChange={props.changed} {...props} />;
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