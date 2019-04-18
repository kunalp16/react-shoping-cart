import React, { Component } from 'react';
import Classes from '../Login/login.css';
import Button from '../../UI/button.css';

class Login extends Component {
    render() {
        return (
            <div className="row">
                <div className={"col-md-5 offset-4 " + Classes.centerSection}>
                    <h2>Login</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Enter Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input type="number" className="form-control" id="mobile" placeholder="Enter Mobile Number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                            <small id="nameHelp" className="form-text text-muted">Password createria</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        )
    };
}

export default Login;