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
                    placeholder: 'Enter Email'
                },
                value: ''
            },
            mobileNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Enter Mobile Number'
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: ''
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
        updatedLoginForm[inputIdentifier] = updatedLonginFormElement;
        this.setState({ loginForm: updatedLoginForm })
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
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
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