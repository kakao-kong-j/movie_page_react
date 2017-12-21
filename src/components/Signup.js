import React, { Component } from "react";
import { auth } from "../script/auth";
import "../css/Signup.css";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { registerError: null };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.setErrorMsg = this.setErrorMsg.bind(this);
  }
  setErrorMsg(error) {
    return {
      registerError: error.message
    };
  }
  handleSubmit = e => {
    // e.preventDefault()
    auth(this.email.value, this.pw.value)
      .then(() => {
        this.props.history.push("/movie_page_react/");
      })
      .catch(e => this.setState(this.setErrorMsg(e)));
  };
  handleKeyPress = e => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === "Enter") {
      this.handleSubmit();
    }
  };
  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12" id="Signup">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <span className="anchor" id="formSignup" />
                <div className="card rounded-0">
                  <div className="card-header">
                    <h3 className="mb-0">Signup</h3>
                  </div>
                  <div className="card-body">
                    <form
                      className="form"
                      autoComplete="off"
                      id="formLogin"
                      onKeyDown={this.handleKeyPress}
                    >
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          className="form-control form-control-lg rounded-0"
                          name="uname1"
                          id="uname1"
                          ref={email => (this.email = email)}
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control form-control-lg rounded-0"
                          id="pwd1"
                          placeholder="Password"
                          ref={pw => (this.pw = pw)}
                        />
                      </div>
                      {this.state.registerError && (
                        <div className="alert alert-danger" role="alert">
                          <strong>Error! </strong>
                          {this.state.registerError}
                        </div>
                      )}
                      <button
                        type="button"
                        className="btn btn-success btn-block"
                        onClick={this.handleSubmit}
                      >
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
