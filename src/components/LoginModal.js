import React, { Component } from 'react';
import {googlelogin,login} from '../script/auth'
import {Link } from 'react-router-dom';
import '../css/LoginModal.css';
function setErrorMsg(error) {
    return {
        loginMessage: error
    }
}
class LoginModal extends Component {
  state = { loginMessage: null }
  handleSubmit = (e) => {
      // e.preventDefault()
      login(this.email.value, this.pw.value)
      .then(()=>{
        this.props.history.push('/')
      })
        .catch((error) => {
            this.setState(setErrorMsg('Invalid username/password.'))
          })
    }
    googleloginSubmit = (e) => {
        e.preventDefault()
        googlelogin()
        this.props.history.push('/')
      }
      handleKeyPress = (e) => {
        // 눌려진 키가 Enter 면 handleCreate 호출
        if(e.key === 'Enter') {
            this.handleSubmit();
        }
    }
  render () {
    const{handleKeyPress}=this;
    return ( 
      <div className="container py-5" >
        <div className="col-md-12" id="LoginContainer">
          <div className="col-md-6 mx-auto">
            <span className="anchor" id="formLogin"></span>
            <div className="card rounded-0">
              <div className="card-header">
                <h3 className="mb-0">Login</h3>
              </div>
              <div className="card-body">
                <form className="form" autoComplete="off" id="formLogin" onKeyPress={handleKeyPress}>
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control form-control-lg rounded-0" name="uname1" id="uname1" ref={(email) => this.email = email} placeholder="Email"/>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control form-control-lg rounded-0" id="pwd1" placeholder="Password" ref={(pw) => this.pw = pw} />
                  </div>
                  {
                    this.state.loginMessage &&
                    <div className="alert alert-danger" role="alert">
                        <strong>Error!</strong> {this.state.loginMessage} 
                    </div>
                  }
                  <button type="button" className="btn btn-success btn-block" onClick={this.handleSubmit}>Login</button>
                  <br/>
                  <button type="button" className="btn btn-warning btn-block" onClick={this.googleloginSubmit}>Google Login</button>
                  <br/>
                  <Link to="/Signup">
                    <button type="button" className="btn btn-info btn-block"> Create A New Account </button>
                  </Link> 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginModal;