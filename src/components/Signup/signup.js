import React, { Component } from 'react';
import Classes from '../Signup/signup.css';
import Input from '../../UI/input/input';

class Signup extends Component {
    state = {
        signUpForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: ''
            },
            mobileNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Mobile'
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
            },
            passwordConfirm: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm Password'
                },
                value: ''
            }
        }

    }

    signUpSubmitHandler = (event) => {
        event.preventDefault();
        // this.setState({ loading: true });
        const formData = {};
        for (let formElementIdentifier in this.state.signUpForm) {
            formData[formElementIdentifier] = this.state.signUpForm[formElementIdentifier].value;
        }
        const signUpFormData = {
            signUpData: formData
        }
        console.log(signUpFormData);
    }



    inputChangedHandler(event, inputIdentifier) {
        const updatedSignUpForm = {
            ...this.state.signUpForm
        }
        const updatedSignUpElement = {
            ...updatedSignUpForm[inputIdentifier]
        }
        updatedSignUpElement.value = event.target.value;
        updatedSignUpForm[inputIdentifier] = updatedSignUpElement;
        this.setState({ signUpForm: updatedSignUpForm })
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.signUpForm) {
            formElementsArray.push({
                id: key,
                config: this.state.signUpForm[key]
            });
        }
        let form = (
            <form onSubmit={this.signUpSubmitHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <br />
                <input className="btn btn-primary float-right" type="submit" value="Signup"></input>
            </form>
        );

        return (
            <div className="row">
                <div className={"col-md-5 offset-4 " + Classes.centerSection}>
                    <h2>Signup</h2>
                    {form}
                </div>
            </div>
        )
    };
}

export default Signup;