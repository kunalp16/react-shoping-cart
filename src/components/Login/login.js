import React, { Component } from 'react';
import Classes from '../Login/login.css';
import Input from '../../UI/input/input';


class Login extends Component {
    state = {
        loginForm: {
            email: {
                elementtype: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Email'
                },
                value: ''
            },
            mobileNumber: {
                elementtype: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Enter Mobile Number'
                },
                value: ''
            },
            password: {
                elementtype: 'input',
                elementConfig: {
                    type: 'Password',
                    placeholder: 'Password'
                },
                value: ''
            }
        }

    }

    // orderHandler = (event) => {
    //     event.preventDefault();
    //     // this.setState({ loading: true });
    //     const formData = {};
    //     for (let formElementIdentifier in this.state.loginForm) {
    //         formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
    //     }
    //     const logindata = {
    //         loginData: formData
    //     }
       
    // }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedLoginForm = {
            ...this.state.loginForm
        };
        const updatedFormElement = {
            ...updatedLoginForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedLoginForm[inputIdentifier] = updatedFormElement;
        this.setState({ loginForm: updatedLoginForm });
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
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementtype={formElement.config.elementtype}
                        elementconfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        placeholder={formElement.config.elementConfig.placeholder}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                {/* <input type="button" btnType="Success">login</input> */}
            </form>
        );
        return (
            <div className="row">
                <div className={"col-md-5 offset-4 " + Classes.centerSection}>
                    <h2>Login</h2>
                    {/* <form>
                        <div className="form-group">
                            <Input inputtype="input" type="email" htmlFor="email" label="Enter Email" id="email" placeholder="Enter Email" />
                        </div>
                        <div className="form-group">
                            <Input inputtype="input" type="number" htmlFor="mobile" label="Mobile Number" id="mobile" placeholder="Enter Mobile Number" />
                        </div>
                        <div className="form-group">
                            <Input inputtype="input" type="password" htmlFor="password" label="Password" id="password" placeholder="Password" />
                            <small id="nameHelp" className="form-text text-muted">Password createria</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form> */}
                    {form}
                </div>
            </div>
        )
    };
}

export default Login;