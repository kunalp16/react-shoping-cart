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
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Enter Your Name" />
                            <small id="nameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
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
                        <div className="form-group">
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input type="confirmpassword" className="form-control" id="confirmpassword" placeholder="Confirm Password" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    };
}

export default Login;