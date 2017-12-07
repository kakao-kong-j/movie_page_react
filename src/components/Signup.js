import React, { Component } from 'react';
import { auth } from '../script/auth'
import '../css/Signup.css';
class Signup extends Component {
        state = { registerError: null }
        handleSubmit = (e) => {
          e.preventDefault()
          auth(this.email.value, this.pw.value)
        }
        render () {
          return (
            <div className="col-sm-6 col-sm-offset-3" id="Signup">
              <h1>Register</h1>
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
                  this.state.registerError &&
                  <div className="alert alert-danger" role="alert">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only">Error:</span>
                    &nbsp;{this.state.registerError}
                  </div>
                }
                <button type="submit" className="btn btn-primary">Register</button>
              </form>
            </div>
          )
       }
    }   
export default Signup;