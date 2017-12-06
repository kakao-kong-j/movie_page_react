import React, { Component, PropTypes } from 'react';
import {googlelogin,login, resetPassword } from '../script/auth'
import { NavLink, Link } from 'react-router-dom';
import '../css/LoginModal.css';
function setErrorMsg(error) {
    return {
        loginMessage: error
    }
}
const propTypes = {
};
const defaultProps = {
};
class LoginModal extends Component {
    constructor(props) {
        super(props);
    }
    state = { loginMessage: null }
    handleSubmit = (e) => {
      e.preventDefault()
      login(this.email.value, this.pw.value)
        .catch((error) => {
            this.setState(setErrorMsg('Invalid username/password.'))
          })
    }
    googleloginSubmit = (e) => {
        e.preventDefault()
        googlelogin()
      }
    resetPassword = () => {
      resetPassword(this.email.value)
        .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
        .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
    }
    render () {
      return (
        <div className="col-sm-6 col-sm-offset-3" id="loginModal">
          <h1> Login </h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
            </div>
            {
              this.state.loginMessage &&
              <div className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span>
                &nbsp;{this.state.loginMessage} 
              </div>
            }
            <button type="submit" className="btn btn-secondary">Login</button>
            </form>
            <form>
              <button className="btn btn-primary" onClick={this.googleloginSubmit}>Google Login</button>
              <br/>
              <Link to="/Signup">
              <button type="button" class="btn btn-outline-success"> Create A New Account </button>
              </Link> 
              </form>

        </div>
      )
    }
}
LoginModal.propTypes = propTypes;
LoginModal.defaultProps = defaultProps;
export default LoginModal;