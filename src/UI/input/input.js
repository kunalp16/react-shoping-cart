import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


const input = (props) => {

    let inputElement = null;

    switch (props.elementType) {

        case ('input'):
            inputElement = (<input
                className="form-control"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
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