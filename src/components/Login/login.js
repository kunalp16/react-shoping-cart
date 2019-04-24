import React, { Component } from 'react';
import Classes from '../Login/login.css';
import Input from '../../UI/input/input';

class Login extends Component {
    state = {
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            mobileNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Mobile'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10
                },
                valid: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false
            }
        }

    }

    signInSubmitHandler = (event) => {
        event.preventDefault();
        // this.setState({ loading: true });
        const formData = {};
        for (let formElementIdentifier in this.state.loginForm) {
            formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
        }
        const loginFormData = {
            loginData: formData
        }

        console.log(loginFormData);

    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedLoginForm = {
            ...this.state.loginForm
        }
        const updatedLonginFormElement = {
            ...updatedLoginForm[inputIdentifier]
        }
        updatedLonginFormElement.value = event.target.value;
        updatedLonginFormElement.valid = this.checkValidity(updatedLonginFormElement.value, updatedLonginFormElement.validation);
        updatedLoginForm[inputIdentifier] = updatedLonginFormElement;
        console.log(updatedLonginFormElement);
        this.setState({ loginForm: updatedLoginForm })
    }

    checkValidity(value, rule) {
        let isValid = true;

        if (rule.required) {
            isValid = (value.trim() !== "") && isValid;
        }

        if (rule.minLength) {
            isValid = (value.length >= rule.minLength) && isValid;
        }

        if (rule.maxLength) {
            isValid = (value.length <= rule.maxLength) && isValid;
        }

        return isValid;
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }
        let form = (
            <form onSubmit={this.signInSubmitHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        valid={!formElement.config.valid} />
                ))}
                <br />
                <input className="btn btn-primary float-right" type="submit" value="Login"></input>
            </form>
        );
        return (
            <div className="row">
                <div className={"col-md-5 offset-4 " + Classes.centerSection}>
                    <h2>Login</h2>
                    {form}
                </div>
            </div>
        )
    };
}

export default Login;